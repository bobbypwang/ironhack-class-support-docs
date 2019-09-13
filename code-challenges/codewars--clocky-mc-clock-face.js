var whatTimeIsIt = function(angle) {
  let hours = Math.floor(angle / 30)
  let minutes = Math.floor((angle % 30) * 2)

  let strHours = String(hours).padStart(2,'0')
  let strMinutes = String(minutes).padStart(2,'0')

  if (strHours == '00') {
    return '12:' + strMinutes
  } else {
    return strHours + ':' + strMinutes
  }
}