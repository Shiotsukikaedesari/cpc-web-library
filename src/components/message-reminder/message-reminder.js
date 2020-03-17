import Vue from 'vue'
import MessageReminder from './message-reminder.vue'

const Tips = Vue.extend(MessageReminder)

MessageReminder.config = data => {
  let component = new Tips({
    el: document.createElement('div'),
    data
  })
  document.body.appendChild(component.$el)
  return component
}

export default MessageReminder
