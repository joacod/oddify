class Button {
  constructor(text) {
    this.text = text;
    this.element = document.createElement("button");
    this.element.innerText = this.text;

    Object.assign(this.element.style, {
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    });
  }

  render(target) {
    target.appendChild(this.element);
  }
}

export default Button;
