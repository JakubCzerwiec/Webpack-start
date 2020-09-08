  import myName from './myName';

  function component() {
      var element = document.createElement('div');

      element.innerHTML = myName('Jakub!!');
      return element;
  }

  document.body.appendChild(component());