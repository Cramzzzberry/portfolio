<script setup>
import { ref } from 'vue';
const api = ref(import.meta.env.VITE_ACTION_URL);
</script>

<template>
  <div class="cm-wrapper">
    <div class="hideFromRight" id="contact-me">
      <div class="header"><b>Contact Me</b></div>
      <div class="two-cols">
        <form :action="api" method="POST">
          <input 
            class="form-input" 
            type="email" 
            name="email" 
            placeholder="Email">
          <textarea 
            class="form-input" 
            name="message" 
            placeholder="Message" 
            ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div class="other-section">
          <div class="phone-num">
            <h3><b>My Phone Number</b></h3>
            <p>+63 976 427 4122</p>
          </div>

          <div class="socials">
            <h3><b>My Socials</b></h3>
            <div>
              <a href="https://www.facebook.com/Cramzzzberry" target="_blank">
                <font-awesome-icon icon="fa-brands fa-facebook" />
              </a>
              <a href="https://www.linkedin.com/in/jan-roe-bantuan-74739916b/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  padding: 0;
  margin: 0 0 1rem 0;
}

.cm-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--gray-950);
  min-height: calc(100vh - 4rem);
  padding: 4rem 12rem 0;
  font-size: 1.5rem;

  & > div > div.header {
    margin-bottom: 1rem;
    font-size: 3rem;
    color: var(--primary-500);
  }
}

form > textarea {
  min-height: 10rem;
}

.two-cols {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & > form {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > button {
      font-family: "Inter";
      font-size: 1.25rem;
      padding: 1rem;
      outline: none;
      background-color: var(--primary-500);
      border: none;
      border-radius: 0.5rem;
      transition-property: background-color;
      transition-duration: 100ms;
      cursor: pointer;

      &:hover {
        background-color: var(--primary-600);
      }
    }
  }

  & > .other-section {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > .phone-num > p {
      margin-bottom: 2rem;
      color: var(--primary-500);
      font-size: 1.5rem;
    }

    & > .socials {
      margin-top: 1rem;

      & > div {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: center;

        & > a {
          font-size: 2rem;
        }
      }
    }
  }
}

.form-input {
  font-family: "Inter";
  font-size: 1.25rem;
  padding: 1rem;
  outline: none;
  background-color: transparent;
  border: 1px solid var(--gray-900);
  border-radius: 0.5rem;
  color: var(--gray-200);
  resize: none;
  transition-property: border;
  transition-duration: 100ms;

  &:focus {
    border: 1px solid var(--primary-700);
  }
}

@media only screen and (max-width: 1280px) {
  .cm-wrapper {
    padding: 4rem 5rem 0;

    & > div > div.header {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .cm-wrapper {
    font-size: 1.25rem;
  }

  .form-input {
    font-size: 1rem;
  }

  .two-cols {
    gap: 0;

    & > form {
      & > button {
        font-size: 1rem;
      }
    }

    & > .other-section {
      & > .phone-num > p {
        font-size: 1.25rem;
      }

      & > .socials {
        & > div {
          & > a {
            font-size: 1.75rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .cm-wrapper {
    font-size: 1rem;
    padding: 4rem 2rem 0;
  }

  .two-cols {
    display: flex;
    flex-direction: column;

    & > form {
      flex-basis: 0;
      & > button {
        font-size: 1rem;
      }
    }

    & > .other-section {
      margin-top: 2rem;
      flex-basis: 0;
      align-items: flex-start;
      justify-content: space-around;
      flex-direction: row;

      & > .phone-num > p {
        font-size: 1rem;
        margin-bottom: 0;
      }

      & > .socials {
        margin-top: 0;

        & > div {
          & > a {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 640px) {
  .cm-wrapper {
    font-size: 1rem;
  }

  .two-cols {
    & > .other-section {
      margin-top: 2rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>