---
slug: prompting_basics
title: Prompting Basics
authors: PasinduUd
tags: [Prompting]
---

# Prompting Basics

To understand the different types of prompting methods, it is important to first understand the basics of prompting notation. The following table summarizes the different components of prompting notation:

<!--truncate-->

| Name               | Notation       | Example                                            | Description                                                                                                                                |
| ------------------ | -------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Input              | x              | "I love this movie."                               | One or multiple texts                                                                                                                      |
| Output             | y              | ++ (very positive)                                 | Output label or text                                                                                                                       |
| Prompting Function | fprompt(x)     | [X] Overall, it was a [Z] movie.                   | A function that converts the input into a specific form by inserting the input x and adding a slot [Z] where answer z may be filled later. |
| Prompt             | x'             | "I love this movie. Overall, it was a [Z] movie."  | A text where [X] is instantiated by input x but answer slot [Z] is not.                                                                    |
| Filled Prompt      | ffill(x', z)   | "I love this movie. Overall, it was a bad movie."  | A prompt where slot [Z] is filled with any answer.                                                                                         |
| Answered Prompt    | ffill(x', z\*) | "I love this movie. Overall, it was a good movie." | A prompt where slot [Z] is filled with a true answer.                                                                                      |
| Answer             | z              | "good", "fantastic", "boring"                      | A token, phrase, or sentence that fills [Z].                                                                                               |

In this table, `x` represents the input text, which can be one or multiple texts. `y` represents the output label or text that the prompting method is trying to generate. The prompting function `fprompt(x)` is a function that takes in input `x` and returns a prompt `x'` with a slot `[Z]` for an answer. The filled prompt `ffill(x', z)` is a prompt where the slot `[Z]` is filled with any answer `z`. The answered prompt `ffill(x', z*)` is a prompt where the slot `[Z]` is filled with a true answer `z*`. The answer `z` is a token, phrase, or sentence that fills the slot `[Z]`.

By using this notation, we can create different types of prompts for different tasks, such as question answering, summarization, sentiment analysis, and classification, using a single language model.
