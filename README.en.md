# Learning Skill · English guide

[Home](README.md) · [中文](README.zh-CN.md)

Learn one manageable unit at a time. You answer, explain, and perform tasks; the AI teaches, gives feedback, and adjusts difficulty.

## Installation

Download this repository and copy the entire `en/learn` directory into your Codex skill directory: `CODEX_HOME/skills` if configured, otherwise `.codex/skills` under your user directory.

If `learn` already exists, back it up and review differences before replacement. The Chinese version also uses `learn`; choose one. Start a new session and confirm the skill is discovered. For other agents, consult their current documentation for supported skill locations and discovery.

## Invocation

```text
Use $learn to teach me [topic].
My starting knowledge is [level], and I have [time] per day.
My goal is to independently complete [task].
```

- Systematic learning of a new topic, skill, or industry defaults to all ten steps, starting with five AI-simulated perspectives that respond to one another and shape the learning route.
- Default perspectives: practitioner, scholar, skeptic, economist, historian; make them concrete or replace unsuitable roles for the topic.
- Single questions, operations, and explicit quick-learning requests use the short route.
- During learning, say “too hard,” “review only,” “continue,” or “pause and give me a continuation note.”

## Mastery checks

Separate performance with hints, independent performance, transfer to a new task, and delayed retention. The tutor waits for real answers or artifacts; an unanswered plan does not demonstrate mastery.

## Limits

No tenfold learning-speed guarantee. Simulated experts and AI scores are not factual verification. Not every request needs ten steps. Review intervals are adaptable; the skill creates no automatic reminders and has no built-in permanent memory.

Research sources are linked in the [skill](en/learn/SKILL.md). They support specific components, not the complete workflow's effectiveness.
