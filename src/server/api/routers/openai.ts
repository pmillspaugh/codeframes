import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Configuration, OpenAIApi } from "openai";

const ORGANIZATION_ID = "org-mgqbSyDCSuscmN2R3PXVSaz1";

export const openaiRouter = createTRPCRouter({
  // https://platform.openai.com/docs/api-reference/completions/create
  textGen: publicProcedure
    .input(
      z.object({
        themePrompt: z.string().max(50), // TBD: max length
        user: z.optional(z.string()), // TBD: user identifier — https://platform.openai.com/docs/api-reference/completions/create#completions/create-user
      })
    )
    .query(async ({ input }) => {
      const MODEL = "gpt-3.5-turbo";
      const ROLE = "user";
      const BASE_CONTENT =
        "I am playing the popular game codenames. I want you to generate 16 words (or short phrases) that users will try to connect/relate by providing a clue word. Please provide the words as a comma-separated series without any other surrounding text at all. The 16 words should have the general theme: ";
      const MAX_TOKENS = 96;

      const configuration = new Configuration({
        organization: ORGANIZATION_ID,
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      try {
        // TODO: for preventing API calls in development
        alert("Calling OpenAI API - this costs money!");
        const completion = await openai.createChatCompletion({
          model: MODEL,
          messages: [
            { role: ROLE, content: `${BASE_CONTENT}${input.themePrompt}` },
          ],
          max_tokens: MAX_TOKENS,
        });

        const words = completion.data.choices[0]?.message?.content;

        if (!words) {
          throw new Error(
            "Chat completion message content is undefined. Expected a string."
          );
        }

        const wordList = words.split(", ");

        return {
          wordList,
        };
      } catch (error) {
        console.error(error);
      }
    }),
});
