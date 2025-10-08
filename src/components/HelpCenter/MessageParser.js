export class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) {
      this.actionProvider.greet();
    } else if (lower.includes("help") || lower.includes("price")) {
      this.actionProvider.handleHelp();
    } else if (lower.includes("support") || lower.includes("contact")) {
      this.actionProvider.handleContact();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

   greet() {
    const msg = this.createChatBotMessage("Hello there! 👋 How can I assist you?");
    this.updateChatbotState(msg);
  }

  handleHelp() {
    const msg = this.createChatBotMessage("Sure! You can ask about pricing, support, or product info.");
    this.updateChatbotState(msg);
  }

  handleUnknown() {
    const msg = this.createChatBotMessage("I’m not sure I understood that. Could you rephrase?");
    this.updateChatbotState(msg);
  }

  handleContact() {
    const msg = this.createChatBotMessage("Sure! You can reach us at support@example.com or visit our Contact Us page at https://www.zrealty.com/");
    this.updateChatbotState(msg);
  }

  updateChatbotState(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}
