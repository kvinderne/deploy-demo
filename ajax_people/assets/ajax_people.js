const links = document.getElementById('json-links');
links.addEventListener('click', handleClick);

function handleClick(event) {
  //  You should start by writing this function.
  //   It is very similar to the queryJSON function in the examples
  /* It should:
    - create a new XMLHttpRequest
    - rewriteContent should be attached to 'load' events for the request
    - you should find out the href attribute for the clicked linked
      (hint, you can access the clicked lin with 'event.target')
    - the request should open a 'GET' request, to the .json file
    - the request should finally be sent by calling '.send()' method
  */

    event.preventDefault();
    let request = new XMLHttpRequest();
    //console.log(event.target.href);
    // oa http://localhost:3000/json/tim.json
    request.addEventListener('load', rewriteContent);

    value = event.target.href;
    console.log('value '+ value);
    value2 = value.split('/json/');

    console.log('/json/' + value2[1]);
    //console.log(hrefAttr);
    request.open('GET', '/json/' + value2[1]);
    request.send();
}

function rewriteContent() {
  // After you've completed handleClick function,
  // the following line should log the contents of
  // the .json file to the browsers console
  console.log('rewriteContentissaahh ');
  console.log(this.responseText);




  /*
    Once you see content logged to the console, you can remove
    the console.log command and start completing this function.
    It should:
    - parse the responseText to be a JavaScript object
    - you should change the #name in the document
      to equal the name property found in object
    - you should do the same for #born and born property
    - you should do the same for #link and link property
    - finally, the href attribute of the #link should be
      changed to match the link property of the object

    Once you've completed both of these functions and they
    work as expected, submit this file to the grader to receive points.
    y
    */
    let contObject = JSON.parse(this.responseText);
    console.log('parsattu ' + contObject.name + contObject.born + contObject.link);

    let changeName = document.querySelector("#name");
    console.log('koko selectattu ' + changeName);
    console.log('ja sisäteksti ' + changeName.innerText);
    changeName.innerText = contObject.name;
    console.log('sisä muutettuna ' + changeName);

    //document.(querySelector(#"name").innerText).replace(contObject.name);

    //console.log(document);

    //indexDocument2 = indexDocument.replace(#name, contObject.name);
    //console.log('nimi ' + document.innerText);
    //indexDocument2 = indexDocument2.replace(#born, contObject.born);
    //console.log('synt ' + indexDocument2);
    let changeBorn = document.querySelector("#born");
    console.log('koko selectattu ' + changeBorn);
    console.log('ja sisäteksti ' + changeBorn.innerText);
    changeBorn.innerText = contObject.born;
    console.log('sisä muutettuna ' + changeBorn);

    //indexDocument2 = indexDocument2.replace(#link, contObject.link);
    //console.log('link ' + indexDocument2);
    //let changeLink = document.querySelector("#link");
    //console.log('koko selectattu ' + changeLink);
    //console.log('ja sisäteksti ' + changeLink.innerText);

    let changeLink = document.querySelector("#link");
    console.log('koko selectattu ' + changeLink);
    console.log('ja sisäteksti ' + changeLink.innerText);
    changeLink.innerText = contObject.link;
    console.log('sisä muutettuna ' + changeLink);

    //console.log('vaihdosta ' + indexDocument2);
    //console.log('vaihettu ' + indexDocument);

    let h = document.getElementById('link');
    //console.log('ja h ' + h);
    h.setAttribute('href', contObject.link);
    //console.log(h.outerHTML);




}
