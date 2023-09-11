function addEventHandler(element, type, handler) {
   if(element['addEventListener']) {
      element.addEventListener(type, handler)
   }else if(element['attachEvent']) {
      element.addeEvent('on' + type, handler)
    }else{
        element['on' + type] = handler
    }
}

function removeEventHandler(element, type, handler) {
    if(element.removeEventListener) {
        element.removeEventListener(type, handler)
    }else if(element.detachEvent) {
        element.detachEvent('on' + type, handler)
    }else{
        element['on' + type] = null
    }
}