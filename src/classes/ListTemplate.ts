import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const totalDiv = document.querySelector('#total') as HTMLSpanElement;
    const li = document.createElement('li');
  
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    p.dataset.amount = item.amount.toString();
    li.append(p);

    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.className = 'delete';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(btn.previousElementSibling);
      let dataP = btn.previousElementSibling as HTMLParagraphElement;
      let dataH4 = dataP.previousElementSibling as HTMLHeadingElement; 

      let actionAmount: string = dataP.dataset.amount||'0';
      let actionType: string = dataH4.innerText||'';
      if(actionType === 'Invoice'){
        this.container.removeChild(li);
        totalDiv.innerText = (parseInt(totalDiv.innerText) - parseInt(actionAmount)).toString();
      } else {
        this.container.removeChild(li);
        totalDiv.innerText = (parseInt(totalDiv.innerText) + parseInt(actionAmount)).toString();
      }
      this.container.removeChild(li);
    });
    li.append(btn);

    if(pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}