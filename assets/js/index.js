window.onload = function(){
    let _cerrar_menu = true;
    let _btn_menu = document.getElementsByClassName("nav__hamburguer")[0];
    let _menu_links = document.getElementsByClassName("nav__links")[0];
    let _menu_links_content = document.getElementsByClassName("nav__links-content")[0];
    _btn_menu.addEventListener("click", function(){
        if(!_menu_links.classList.contains("nav__links-open")){
            _menu_links.classList.add("nav__links-open");
        }
    });
    _menu_links.addEventListener("click", function(){
        if(_cerrar_menu && _menu_links.classList.contains("nav__links-open")){
            _menu_links.classList.remove("nav__links-open");
        }
        _cerrar_menu = true;
    });
    _menu_links_content.addEventListener("click", function(){
        _cerrar_menu = false;
    });
    
    
    let _accordions_head = document.getElementsByClassName("accordion__head");
    for(let i = 0; i < _accordions_head.length; i++){
        _accordions_head[i].addEventListener("click", function(){
            if(_accordions_head[i].childNodes[3].classList.contains("accordion__button--rotate")){
                _accordions_head[i].childNodes[3].classList.remove("accordion__button--rotate");
                _accordions_head[i].parentNode.childNodes[3].classList.remove("accordion__content--open");
            }
            else{
                _accordions_head[i].childNodes[3].classList.add("accordion__button--rotate");
                _accordions_head[i].parentNode.childNodes[3].classList.add("accordion__content--open");
            }
        });
    }
    let _profile = document.getElementById("profile");
    fetch("https://rickandmortyapi.com/api/character/2")
    .then((resp=>resp.json()))
    .then(person=>{
        _profile.childNodes[1].childNodes[3].setAttribute("src", person.image);
        _profile.childNodes[3].childNodes[1].childNodes[3].innerHTML = person.name;
        _profile.childNodes[3].childNodes[3].childNodes[3].innerHTML = person.gender;
        let _list = _profile.childNodes[3].childNodes[5].childNodes[3];
        for(let i = 0; i < 5; i++){
            let _list_item = document.createElement("li");
            let _list_item_a = document.createElement("a");
            _list_item_a.setAttribute("href", person.episode[i]);
            _list_item_a.appendChild(document.createTextNode(person.episode[i]));
            _list_item.appendChild(_list_item_a);
            _list.appendChild(_list_item);
        }
    }).catch(e=>{console.log(e)});
}