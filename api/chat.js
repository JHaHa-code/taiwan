// Vercel Serverless Function: api/chat.js
// 이 파일은 브라우저(index.html)가 아닌, Vercel 서버 환경에서 실행됩니다.

// Node.js 환경에서 fetch를 지원하도록 합니다. (Vercel은 기본 지원)
// Vercel 환경에서 노출하고 싶지 않은 OPENAI_API_KEY 환경 변수를 읽어옵니다.
export default async function (req, res) {
    // Vercel 환경 변수에서 API 키를 가져옵니다.
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    // API 키 설정 여부 확인
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ 
            error: "서버 오류: Vercel 환경 변수에 'OPENAI_API_KEY'가 설정되지 않았습니다." 
        });
    }

    // 프론트엔드에서 전송된 사용자 메시지를 추출합니다.
    const { userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "유효하지 않은 요청: userMessage가 누락되었습니다." });
    }

    // OpenAI에 보낼 시스템 프롬프트 및 메시지 구성
    const systemPrompt = "당신은 친절하고 유쾌한 대만 여행 가이드입니다. 사용자의 질문에 대해 한국어로 답변해 주세요. 답변은 간결하고 실용적인 정보를 위주로 제공하세요.";

    const apiMessages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
    ];
    
    const payload = {
        model: "gpt-3.5-turbo",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 500,
    };

    // OpenAI API 호출 (API 키를 서버에서 안전하게 사용)
    try {
        const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify(payload)
        });

        const data = await openaiResponse.json();

        if (!openaiResponse.ok) {
            console.error("OpenAI Error:", data);
            // OpenAI에서 받은 오류를 그대로 프론트엔드로 전달
            return res.status(openaiResponse.status).json({ 
                error: data.error?.message || "OpenAI API 호출에 실패했습니다." 
            });
        }
        
        // AI 응답 텍스트만 추출하여 프론트엔드로 전송
        const aiText = data.choices?.[0]?.message?.content?.trim() || "죄송합니다. 답변을 생성하지 못했습니다.";
        res.status(200).json({ text: aiText });

    } catch (error) {
        console.error("Vercel Function 내부 오류:", error);
        res.status(500).json({ error: "내부 서버 오류가 발생했습니다." });
    }
}
