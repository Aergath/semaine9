$liste = document.getElementById("liste");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");

function select(e) {
    e.target.classList.toggle("selected");
}

function supprimer() {
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("suppr");
        }
    }
}

function restaurer() {
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("suppr");
    }
}

$liste.onclick = select;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;