# Situational Leadership AI Practice Partner

## Project Brief

Build a prototype AI practice partner that helps leaders apply situational leadership in real workplace scenarios. This is for Sean Miller, a master coach (one of only 117 in the UK), to show his clients what's possible.

**Important:** Create and maintain a `PROGRESS.md` file in this folder to track what's been built, what's working, and what's next.

---

## What This Tool Does

1. **Diagnoses the situation** - Asks the leader about their team member and the task at hand
2. **Identifies the right leadership style** - Based on Ken Blanchard's Situational Leadership model
3. **Offers to practise** - Lets the leader rehearse the conversation with an AI playing the team member

---

## The Ken Blanchard Situational Leadership Model

The model is based on two dimensions:
- **Competence** (skill) - Can they do the task?
- **Commitment** (will/motivation) - Do they want to do it?

### The Four Development Levels

| Level | Name | Competence | Commitment | What They Need |
|-------|------|------------|------------|----------------|
| D1 | Enthusiastic Beginner | Low | High | **Directing** - Tell them what to do, how to do it |
| D2 | Disillusioned Learner | Some | Low | **Coaching** - Still direct, but also support and encourage |
| D3 | Capable but Cautious | Moderate-High | Variable | **Supporting** - Less direction, more encouragement and listening |
| D4 | Self-Reliant Achiever | High | High | **Delegating** - Hand it over, get out of the way |

### The Four Leadership Styles

| Style | Directive Behaviour | Supportive Behaviour | Used For |
|-------|---------------------|----------------------|----------|
| S1 - Directing | High | Low | D1 - Enthusiastic Beginner |
| S2 - Coaching | High | High | D2 - Disillusioned Learner |
| S3 - Supporting | Low | High | D3 - Capable but Cautious |
| S4 - Delegating | Low | Low | D4 - Self-Reliant Achiever |

## User Flow

### Phase 1: Diagnosis

```
AI: "Tell me about the situation. Who's the person, and what's the task or challenge?"

User: "I need to talk to Sarah about taking on the quarterly reporting. She's never done it before but she's really keen."

AI: "Got it. Let me ask a few questions to help figure out the best approach.

How would you rate Sarah's current skill level for this specific task?
1. New to this - hasn't done it before
2. Learning - has some experience but still developing
3. Competent - can do it but might lack confidence
4. Expert - fully capable and confident"

User: "1 - she's never done it"

AI: "And how would you describe her motivation or enthusiasm for taking this on?
1. Highly motivated - excited to learn
2. Uncertain - some doubts or hesitation
3. Frustrated - finding it harder than expected
4. Confident - ready to own it"

User: "1 - she's really keen"

AI: "Based on what you've told me, Sarah sounds like an Enthusiastic Beginner (D1) for this task. She's motivated but needs to build the skills.

**Your approach: Directing (S1)**

This means:
- Be clear and specific about what needs to be done
- Break the task down into steps
- Show her how to do it, don't just tell her
- Check in frequently on progress
- Keep encouragement brief - she's already motivated

Would you like to practise this conversation with me playing Sarah?"
```

### Phase 2: Practice (if user says yes)

```
AI: "OK, I'll play Sarah. She's enthusiastic but inexperienced. Start the conversation however you'd naturally begin it, and I'll respond as she might.

When you're ready, just start talking to 'Sarah'."

User: "Sarah, I wanted to talk to you about the quarterly reporting..."

[AI responds as Sarah would - keen, asking questions, maybe nervous about getting it right]

[Conversation continues until user says they're done or asks for feedback]
```

### Phase 3: Feedback

```
AI: "Nice work. A few observations:

**What worked well:**
- You were clear about the deadline and expectations
- You offered to show her the template first

**Something to consider:**
- You asked 'does that make sense?' which can make people say yes even when confused. Try 'what questions do you have?' instead - it assumes questions are normal.

Would you like to try again, or shall we wrap up?"
```

---

## Technical Options

### Option A: Simple Chat (Recommended for Prototype)
- Claude API with a well-crafted system prompt
- Web interface (could use Lovable or simple HTML/JS)
- Fastest to build, easy to demo

### Option B: Voice-Based
- Vapi for voice interaction
- More immersive but more complex
- Could be Phase 2

### Option C: Integrate with Calendar/Email (Future)
- "I see you have a 1:1 with Sarah tomorrow. Want to prepare?"
- Much more complex, requires integrations
- Phase 3 / future vision

**Recommendation:** Start with Option A. Get the logic and prompts right. Voice can come later.

---

## Success Criteria

1. User can describe a situation and get correctly diagnosed
2. The four development levels are accurately identified
3. The recommended leadership style matches the level
4. Practice mode feels realistic and helpful
5. Sean Miller sees it and says "yes, this is what I meant"

---

## Out of Scope (For Now)

- Production-ready security/auth
- Multi-user accounts
- Voice interface
- Calendar/email integration
- Mobile app
- The other two challenges Sean mentioned (emotional intelligence, dealing with difference)

---

## Resources

- Ken Blanchard's book: "Leadership and the One Minute Manager"
- The Blanchard Companies website has resources on SLII (their updated model)
- Sean Miller is available for feedback once we have something to show

---

## Who This Is For

**Sean Miller** - Master coach, one of 117 in the UK with this qualification. He facilitates leadership programmes and wants AI tools that:
1. Replace awkward role-plays in training sessions
2. Give leaders "just-in-time" coaching in their pocket
3. Reinforce learning after the classroom session ends

His client (under NDA, data intelligence company) is interested in this. If we build something good, it could become a SaaS product.

---

## Contact

This is a prototype for AgentFlow (Hamish Nicklin's company).

Questions: Ask Hamish or check the main Jarvis system at `/Users/hamishnicklin/Desktop/Jarvis/`
