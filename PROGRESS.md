# Situational Leadership Tool - Progress Tracker

## Current Status: Prototype Complete - Ready for Testing

**Last Updated:** 2026-01-14

**Session ended:** User needs to test the prototype and provide feedback.

---

## Quick Resume

To test the prototype:
```bash
open /Users/hamishnicklin/Desktop/SituationalLeadershipTool/index.html
```

You'll need an Anthropic API key. The app stores it locally in your browser.

---

## What's Been Done

### Research
- [x] Verified Ken Blanchard Situational Leadership model accuracy
- [x] Confirmed D1-D4 development levels and S1-S4 leadership styles mapping

### Development
- [x] System prompt designed for Claude API
- [x] Web chat interface built
- [x] Diagnosis flow implemented
- [x] Practice mode implemented
- [x] Feedback system implemented

### Testing
- [ ] Tested with sample scenarios
- [ ] Validated all four development level diagnoses
- [ ] Tested practice mode roleplay quality

---

## What's Working

**Complete prototype built with:**
- Clean, responsive chat interface
- Claude API integration (requires user's API key)
- Three-phase flow: Diagnosis → Recommendation → Practice
- System prompt with full SLII model knowledge
- Role-play capability where AI plays the team member
- Feedback after practice sessions

**Files:**
- `index.html` - Main page with chat interface
- `styles.css` - Clean, professional styling
- `app.js` - Application logic and Claude API integration

---

## How to Run

1. Open `index.html` in a web browser
2. Enter your Anthropic API key when prompted
3. Describe a situation (e.g., "I need to talk to Sarah about taking on quarterly reporting. She's never done it before but she's really keen.")
4. Answer the diagnostic questions
5. Get the recommended leadership style
6. Practice the conversation with the AI playing your team member

---

## What's Next

1. **Test the prototype** - Open index.html, enter API key, try a scenario
2. **Test all four development levels:**
   - D1: "New person, eager but no experience" → should get S1 Directing
   - D2: "Some experience but frustrated/demotivated" → should get S2 Coaching
   - D3: "Skilled but hesitant/lacks confidence" → should get S3 Supporting
   - D4: "Expert, confident, self-directed" → should get S4 Delegating
3. **Try practice mode** - Say yes when asked to practise the conversation
4. **Get feedback from Sean Miller**
5. **Future enhancements to consider:**
   - Example scenario buttons
   - Visual diagram of the SLII model
   - Session history
   - Voice interface (Phase 2)

---

## Technical Decisions

- **Approach:** Option A - Simple chat with Claude API
- **Stack:** HTML, CSS, JavaScript (vanilla - no framework needed for prototype)
- **API:** Claude API (Anthropic) using claude-opus-4-5-20251101
- **Storage:** API key stored in localStorage (browser only)

---

## The SLII Model (Quick Reference)

| Development Level | Competence | Commitment | Leadership Style |
|-------------------|------------|------------|------------------|
| D1 - Enthusiastic Beginner | Low | High | S1 - Directing |
| D2 - Disillusioned Learner | Some | Low | S2 - Coaching |
| D3 - Capable but Cautious | High | Variable | S3 - Supporting |
| D4 - Self-Reliant Achiever | High | High | S4 - Delegating |

---

## Notes

- This is a proof of concept for Sean Miller (master coach)
- Keep it simple - focus on getting the diagnosis and practice flow right
- Voice interface can come later
- CORS: Using `anthropic-dangerous-direct-browser-access` header for direct browser API calls

---

## Changelog

### 2026-01-14
- Created PROGRESS.md
- Researched and verified Blanchard SLII model
- Built complete prototype:
  - index.html with chat interface
  - styles.css with responsive design
  - app.js with Claude API integration and system prompt
- Ready for testing
