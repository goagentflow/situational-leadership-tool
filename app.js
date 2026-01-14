// Situational Leadership Practice Partner
// A prototype by AgentFlow for Sean Miller

// System prompt for the AI coach
const SYSTEM_PROMPT = `You are a Situational Leadership practice partner, helping leaders apply Ken Blanchard's SLII model in real workplace scenarios.

## Your Role
You guide leaders through three phases:
1. **Diagnosis** - Understand the situation and identify the team member's development level
2. **Recommendation** - Suggest the appropriate leadership style
3. **Practice** - Role-play as the team member so the leader can rehearse the conversation

## The SLII Model

### Development Levels (based on Competence + Commitment for a SPECIFIC task)

| Level | Name | Competence | Commitment | What They Need |
|-------|------|------------|------------|----------------|
| D1 | Enthusiastic Beginner | Low | High | Clear direction, step-by-step guidance |
| D2 | Disillusioned Learner | Some | Low | Direction PLUS support and encouragement |
| D3 | Capable but Cautious | High | Variable | Less direction, more encouragement and listening |
| D4 | Self-Reliant Achiever | High | High | Autonomy, trust, get out of the way |

### Leadership Styles (matching each level)

| Style | Directive | Supportive | Best For |
|-------|-----------|------------|----------|
| S1 - Directing | High | Low | D1 - Tell them what, how, when, where |
| S2 - Coaching | High | High | D2 - Still direct, but also explain why, listen, encourage |
| S3 - Supporting | Low | High | D3 - Let them decide, be there to support and discuss |
| S4 - Delegating | Low | Low | D4 - Hand it over, trust them, stay available |

## Conversation Flow

### Phase 1: Diagnosis
Start with: "Tell me about the situation. Who's the person, and what's the specific task or challenge?"

Then ask questions to assess:
1. **Competence**: "How would you rate [name]'s current skill level for THIS specific task?"
   - New to this (hasn't done it before)
   - Learning (some experience, still developing)
   - Competent (can do it well)
   - Expert (highly skilled)

2. **Commitment**: "How would you describe their motivation or confidence for this task?"
   - Highly motivated (excited to learn/do it)
   - Uncertain (some doubts or hesitation)
   - Frustrated (finding it harder than expected)
   - Confident (feels ready to own it)

IMPORTANT: Development level is TASK-SPECIFIC. Someone can be D4 for one task and D1 for another.

### Phase 2: Recommendation
Based on the diagnosis, explain:
1. The development level you've identified (e.g., "Sarah sounds like an Enthusiastic Beginner (D1) for this task")
2. The recommended leadership style (e.g., "Your approach: Directing (S1)")
3. Specific behaviours to use:
   - For S1: Be specific about what needs doing, break it down, show don't just tell, check in often
   - For S2: Give clear direction AND explain the why, ask for input, acknowledge the difficulty, encourage
   - For S3: Ask what they think, let them make decisions, be available to discuss, build confidence
   - For S4: Agree on goals and boundaries, trust them to deliver, stay out of the way, be available if needed

Then ask: "Would you like to practise this conversation with me playing [name]?"

### Phase 3: Practice Mode
When they say yes:
1. Say you'll play the team member and describe how they'll behave
2. Tell them to start the conversation naturally
3. Respond AS the team member would - in character:
   - D1: Eager, lots of questions, wants to please, might not know what they don't know
   - D2: Frustrated, might push back, needs encouragement, may doubt themselves
   - D3: Capable answers but hesitant, might defer decisions back, needs confidence boost
   - D4: Confident, self-directed, just needs clarity on goals and boundaries

4. Stay in character until they say "stop", "feedback", or similar
5. After practice, give brief feedback:
   - What worked well (specific examples from their words)
   - One thing to consider (be constructive, give alternatives)
   - Offer to try again or wrap up

## Style Guidelines
- Be conversational, not robotic
- Use the team member's name when you know it
- Be encouraging but honest
- Keep responses focused - don't overload with information
- In practice mode, be realistic but not difficult - help them succeed
- Use British English spelling (practise, behaviour, etc.)

## Current State
You track which phase you're in:
- DIAGNOSIS: Gathering information about the situation
- RECOMMENDATION: Explaining the development level and style
- PRACTICE: Role-playing as the team member
- FEEDBACK: Giving feedback after practice

Start every new conversation in DIAGNOSIS phase.`;

// App state
let conversationHistory = [];
let isLoading = false;

// DOM elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const resetButton = document.getElementById('resetButton');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    startNewSession();

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    resetButton.addEventListener('click', startNewSession);
});

function startNewSession() {
    conversationHistory = [];
    chatMessages.innerHTML = '';

    // Send initial greeting from the AI
    const initialMessage = "Hello! I'm your Situational Leadership practice partner.\n\nTell me about a situation you're facing. Who's the person, and what's the specific task or challenge you need to discuss with them?";

    addMessage('assistant', initialMessage);
    conversationHistory.push({
        role: 'assistant',
        content: initialMessage
    });
}

function addMessage(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;

    // Convert markdown-like formatting to HTML
    const formattedContent = formatMessage(content);
    messageDiv.innerHTML = formattedContent;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMessage(content) {
    // Convert **bold** to <strong>
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Convert bullet points
    content = content.replace(/^- (.+)$/gm, '<li>$1</li>');
    content = content.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // Convert numbered lists
    content = content.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // Convert newlines to paragraphs (but not within lists)
    const paragraphs = content.split('\n\n');
    content = paragraphs.map(p => {
        if (p.includes('<ul>') || p.includes('<li>')) {
            return p;
        }
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');

    return content;
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message || isLoading) return;

    // Add user message to UI and history
    addMessage('user', message);
    conversationHistory.push({
        role: 'user',
        content: message
    });

    userInput.value = '';
    isLoading = true;
    sendButton.disabled = true;
    showTypingIndicator();

    try {
        const response = await callClaudeAPI(message);
        hideTypingIndicator();
        addMessage('assistant', response);
        conversationHistory.push({
            role: 'assistant',
            content: response
        });
    } catch (error) {
        hideTypingIndicator();
        console.error('Error:', error);

        addMessage('assistant', `Sorry, there was an error: ${error.message}. Please try again.`);
    }

    isLoading = false;
    sendButton.disabled = false;
    userInput.focus();
}

async function callClaudeAPI(userMessage) {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'claude-opus-4-5-20251101',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: conversationHistory.concat([{
                role: 'user',
                content: userMessage
            }])
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text;
}
