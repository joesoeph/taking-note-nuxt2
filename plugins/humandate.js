const hDate = require('human-date');
export default (context, inject) => {
  inject('hDate', data => hDate.relativeTime(data))
}
