<template>
  <section id="contact" class="contact">
    <h2 class="title">Let's work together.</h2>
    <p class="sub">Open to remote full stack, frontend and backend roles.</p>
    <div class="ctas">
      <a :href="links.linkedin" class="btn btn-yel">LinkedIn</a>
      <a :href="links.github" class="btn btn-yel" target="_blank" rel="noopener">GitHub<span class="sr-only"> (opens in a new tab)</span></a>
      <a :href="links.cv" download class="btn btn-white">Download CV</a>
    </div>
    <form class="form" @submit.prevent="send">
      <label class="field">Name<input v-model="form.name" name="name" autocomplete="name" maxlength="80" required></label>
      <label class="field">Email<input v-model="form.email" name="email" type="email" autocomplete="email" maxlength="254" required></label>
      <label class="field wide">Message<textarea v-model="form.message" name="message" rows="5" maxlength="2000" required /></label>
      <div class="honeypot" aria-hidden="true">
        <label>Leave this empty<input v-model="form.website" name="website" tabindex="-1" autocomplete="off"></label>
      </div>
      <div class="footer">
        <button type="submit" class="btn submit" :disabled="sending">Send message</button>
        <span class="note" role="status" aria-live="polite">{{ note }}</span>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
  import { links } from '~/data/site'

  const form = reactive({ name: '', email: '', message: '', website: '' })
  const note = ref('')
  const sending = ref(false)

  async function send() {
    sending.value = true
    note.value = 'Sending…'
    try {
      await $fetch('/api/contact', { method: 'POST', body: { ...form } })
      Object.assign(form, { name: '', email: '', message: '', website: '' })
      note.value = "Thanks! I'll get back to you soon."
    } catch (err: any) {
      const status = err?.response?.status
      const errors = err?.data?.errors as Record<string, string> | undefined
      if (status === 422 && errors) {
        note.value = Object.values(errors)[0] ?? 'Please check the form and try again.'
      } else if (status === 429) {
        note.value = "That's a lot of messages in a short time. Please wait a few minutes and try again."
      } else {
        note.value = 'Something went wrong. Please try again later, or message me on LinkedIn.'
      }
    } finally {
      sending.value = false
    }
  }
</script>

<style scoped>
  .contact {
    scroll-margin-top: 20px;
    background: var(--pink);
    color: #17141a;
    border: 3px solid var(--ink);
    box-shadow: 10px 10px 0 var(--ink);
    padding: clamp(28px, 6vw, 64px);
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .title {
    margin: 0;
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(34px, 6vw, 64px);
    line-height: 1;
  }
  .sub { margin: 0; font-size: 21px; font-weight: 500 }
  .ctas { display: flex; gap: 12px; flex-wrap: wrap }
  .btn { padding: calc(12px - var(--nudge)) 20px calc(12px + var(--nudge)) }
  .btn-yel { background: var(--yel) }
  .btn-white { background: #fff }
  .form {
    margin-top: 12px;
    background: #fff;
    color: #17141a;
    border: 2.5px solid #17141a;
    box-shadow: 6px 6px 0 #17141a;
    padding: clamp(18px, 4vw, 28px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
    gap: 14px;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-weight: 700;
    font-size: 16px;
  }
  .field input,
  .field textarea {
    font: inherit;
    font-weight: 500;
    padding: calc(10px - var(--nudge)) 12px calc(10px + var(--nudge));
    border: 2px solid #17141a;
    background: #fffdf8;
    color: #17141a;
  }
  .field textarea { resize: vertical }
  .wide { grid-column: 1 / -1 }
  .honeypot { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden }
  .footer {
    grid-column: 1 / -1;
    display: flex;
    gap: 14px;
    align-items: center;
    flex-wrap: wrap;
  }
  .submit {
    cursor: pointer;
    font: inherit;
    font-size: 17px;
    font-weight: 700;
    background: oklch(0.85 0.15 145);
    padding: calc(12px - var(--nudge)) 24px calc(12px + var(--nudge));
  }
  .submit:disabled { cursor: progress; opacity: .7 }
  .note { font-size: 14px; color: #5c5560 }
</style>
