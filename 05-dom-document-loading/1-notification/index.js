export default class NotificationMessage {
  element;

  static lastInstance;

  constructor(message = '',
              notificationConfig = {}) {
    const {duration = 2000, type = 'success' } = notificationConfig;
    this.message = message;
    this.duration = duration;
    this.type = type;
    this.element = this.createNotificationElement(this.createNotificationTemplate());
  }

  show(targetElement = document.body) {
    if (NotificationMessage.lastInstance) {
      NotificationMessage.lastInstance.destroy();
    }
    NotificationMessage.lastInstance = this;
    targetElement.appendChild(this.element);

    this.timerId = setTimeout(() => {
      this.destroy();
    }, this.duration);
  };

  createNotificationElement(template) {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstElementChild;
  }

  createNotificationTemplate() {
    return (
      `<div class="notification ${this.type}" style="--value:${this.duration}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>`
    )
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    clearTimeout();
  };
}
