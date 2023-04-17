const $icon = document.querySelector('.icon');
const $type = document.querySelector('.main .type');
const $span = document.querySelector('.main .lnr');
const $todolist = document.querySelector('#todoList')
const $li = document.querySelector('#todoList li')
const $lii = document.querySelectorAll('#todoList li')
const $input = document.querySelector('.type input');
const $leftext = document.querySelector('.left .text')
const $rightremove = document.querySelectorAll('.right .lnr-cross-circle');
const $papa = document.querySelector('#todoList .papa');
const $hidden = document.querySelector('.hidden');
// let $shallowClone;

$icon.addEventListener('click', function (e) {
    // if(e.target!==$icon && e.target!==$span){
    // alert("할 일이 너무 많아요~~~");
    // $hidden.style.display="block";
    console.log($hidden.style)
    const $inputValue = $input.value;
    console.log($inputValue);
    $input.value = '';
    //     return;
    // }
    console.log($papa)
    // const $li2 = document.createElement('li');
    // console.log($li)
    const $shallowClone = $papa.cloneNode(true);
    // console.log($shallowClone.children[0].children[1])
    $shallowClone.style.display = "block";
    $shallowClone.children[0].children[0].children[1].textContent = $inputValue;
    // console.log($shallowClone)

    const $removeButton = $shallowClone.querySelector('.right .lnr-cross-circle');
    $removeButton.addEventListener('click', function (e) {
        $shallowClone.classList.add('test');
        setTimeout(function () {
            e.target.parentNode.parentNode.parentNode.remove();
        }, 1000);
    });
    $shallowClone.classList.remove('test')

    const $inputcheckbox1 = $shallowClone.querySelectorAll('.left input');
    for (let $ch of $inputcheckbox1) {

        $ch.addEventListener('click', function (e) {

            if ($ch.checked) {
                $ch.parentElement.children[1].style.textDecoration = 'line-through';
            }
            if (!$ch.checked) {
                $ch.parentElement.children[1].style.textDecoration = 'none';
            }
        })

    }

    const $rightspan = $shallowClone.querySelectorAll('.right .lnr-undo')

    for (let $rs of $rightspan) {

        $rs.addEventListener('click', function (e) {

            if (e.target.parentElement.parentElement.children[0].children[1].matches('.bye1')) {
                e.target.classList.remove('class', 'lnr-checkmark-circle');
                e.target.classList.add('class', 'lnr-undo');
                const $divhi = document.createElement('div');
                $divhi.setAttribute('class', 'text');
                $divhi.textContent = e.target.parentElement.parentElement.children[0].children[1].value;
                console.log($divhi.textContent)
                console.log($divhi)
                console.log(e.target.parentElement.parentElement.children[0].children[1])
                e.target.parentElement.parentElement.children[0].children[1].remove();
                e.target.parentElement.parentElement.children[0].appendChild($divhi);
                return;
            }
            e.target.classList.remove('class', 'lnr-undo');
            e.target.classList.add('class', 'lnr-checkmark-circle');
            // console.log(e.target.parentElement.parentElement.children[0].children[1])
            const $hiinput = document.createElement('input');
            $hiinput.setAttribute('type', 'text')
            $hiinput.setAttribute('class', 'bye1')

            // $hiinput.setSelectionRange($hiinput.value.length, $hiinput.value.length);
            // $hiinput.setAttribute('autofocus')
            $hiinput.value = e.target.parentElement.parentElement.children[0].children[1].textContent;
            e.target.parentElement.parentElement.children[0].children[1].remove();
            e.target.parentElement.parentElement.children[0].appendChild($hiinput);
            $hiinput.focus();

            $hiinput.addEventListener('keyup', function (k) {
                if (k.key === 'Enter') {
                    if (e.target.parentElement.parentElement.children[0].children[1].matches('.bye1')) {
                        e.target.classList.remove('class', 'lnr-checkmark-circle');
                        e.target.classList.add('class', 'lnr-undo');
                        const $divhi = document.createElement('div');
                        $divhi.setAttribute('class', 'text');
                        $divhi.textContent = e.target.parentElement.parentElement.children[0].children[1].value;
                        console.log($divhi.textContent)
                        console.log($divhi)
                        console.log(e.target.parentElement.parentElement.children[0].children[1])
                        e.target.parentElement.parentElement.children[0].children[1].remove();
                        e.target.parentElement.parentElement.children[0].appendChild($divhi);
                        return;
                    }
                }
            })


        })

    }

    if ($shallowClone.children[0].children[0].children[1].textContent === '') {
        alert('빈칸은 입력할 수 없습니다! 입력해주세요.')
        return;
    }
    $todolist.appendChild($shallowClone)
    // $li2.textContent = $inputValue;
    // console.log($li2)
    // $todolist.appendChild($li2); 



})

$input.addEventListener('keyup', function (e) {
    // console.log($input)
    if (e.key === 'Enter') { //keycode === 13 , enter와 같음
        // alert("할 일이 너무 많아요~~~");
        const $inputValue = $input.value;
        $input.value = '';
        const $shallowClone = $papa.cloneNode(true);
        $shallowClone.style.display = "block";
        $shallowClone.children[0].children[0].children[1].textContent = $inputValue;
        if ($shallowClone.children[0].children[0].children[1].textContent === '') {
            alert('빈칸은 입력할 수 없습니다! 입력해주세요.')
            return;
        }



        // $shallowClone.classList.add('test');
        const $removeButton = $shallowClone.querySelector('.right .lnr-cross-circle');

        $removeButton.addEventListener('click', function (e) {
            // const $target = $shallowClone;
            // $target.classList.add('test');
            // setTimeout(function () {
            //     $target.remove();
            // }, 3000);
            $shallowClone.classList.add('test');
            setTimeout(function () {
                e.target.parentNode.parentNode.parentNode.remove();
            }, 1000);
        });
        $shallowClone.classList.remove('test')

        const $inputcheckbox1 = $shallowClone.querySelectorAll('.left input');
        for (let $ch of $inputcheckbox1) {

            $ch.addEventListener('click', function (e) {

                if ($ch.checked) {
                    $ch.parentElement.children[1].style.textDecoration = 'line-through';
                }
                if (!$ch.checked) {
                    $ch.parentElement.children[1].style.textDecoration = 'none';
                }
            })

        }

        const $rightspan = $shallowClone.querySelectorAll('.right .lnr-undo')

        for (let $rs of $rightspan) {

            $rs.addEventListener('click', function (e) {

                if (e.target.parentElement.parentElement.children[0].children[1].matches('.bye1')) {
                    e.target.classList.remove('class', 'lnr-checkmark-circle');
                    e.target.classList.add('class', 'lnr-undo');
                    const $divhi = document.createElement('div');
                    $divhi.setAttribute('class', 'text');
                    $divhi.textContent = e.target.parentElement.parentElement.children[0].children[1].value;
                    console.log($divhi.textContent)
                    console.log($divhi)
                    console.log(e.target.parentElement.parentElement.children[0].children[1])
                    e.target.parentElement.parentElement.children[0].children[1].remove();
                    e.target.parentElement.parentElement.children[0].appendChild($divhi);
                    return;
                }
                e.target.classList.remove('class', 'lnr-undo');
                e.target.classList.add('class', 'lnr-checkmark-circle');
                // console.log(e.target.parentElement.parentElement.children[0].children[1])
                const $hiinput = document.createElement('input');
                $hiinput.setAttribute('type', 'text')
                $hiinput.setAttribute('class', 'bye1')

                // $hiinput.setSelectionRange($hiinput.value.length, $hiinput.value.length);
                // $hiinput.setAttribute('autofocus')
                $hiinput.value = e.target.parentElement.parentElement.children[0].children[1].textContent;
                e.target.parentElement.parentElement.children[0].children[1].remove();
                e.target.parentElement.parentElement.children[0].appendChild($hiinput);
                $hiinput.focus();

                $hiinput.addEventListener('keyup', function (k) {
                    if (k.key === 'Enter') {
                        if (e.target.parentElement.parentElement.children[0].children[1].matches('.bye1')) {
                            e.target.classList.remove('class', 'lnr-checkmark-circle');
                            e.target.classList.add('class', 'lnr-undo');
                            const $divhi = document.createElement('div');
                            $divhi.setAttribute('class', 'text');
                            $divhi.textContent = e.target.parentElement.parentElement.children[0].children[1].value;
                            console.log($divhi.textContent)
                            console.log($divhi)
                            console.log(e.target.parentElement.parentElement.children[0].children[1])
                            e.target.parentElement.parentElement.children[0].children[1].remove();
                            e.target.parentElement.parentElement.children[0].appendChild($divhi);
                            return;
                        }
                    }
                })


            })

        }

        // console.log($shallowClone)
        $todolist.appendChild($shallowClone);

    } else if (e.key === 'Escape') {
        $input.value = '';
    }
})


for (let $riri of $rightremove) {

    $riri.addEventListener('click', function (e) {


        // console.log($lii)
        // console.log($rightremove);
        // console.log($todolist)

        // e.target.closest('li').remove();


        e.target.parentNode.parentNode.parentNode.classList.add('test');
        console.log(e.currentTarget.parentNode.parentNode.parentNode)
        setTimeout(function () {
            // if (e.currentTarget.parentNode.parentNode) {
            e.target.parentNode.parentNode.parentNode.remove();
            // }
        }, 1000);

        // let $liii = document.querySelectorAll('li');
        // for(let $iplus of $liii){
        // if(e.target===$iplus.querySelector('.rightremove')){
        //     $iplus.remove();
        // }
        // }
        // for(let $iplus of $lii){

        //     if(e.target===$iplus){
        //         $iplus.remove();
        //     }
        //     // if($iplus===e.target){

        //     // }
        // }
    })
}

const $inputcheckbox = document.querySelectorAll('.left input');
for (let $ch of $inputcheckbox) {

    $ch.addEventListener('click', function (e) {

        if ($ch.checked) {
            $ch.parentElement.children[1].style.textDecoration = 'line-through';
        }
        if (!$ch.checked) {
            $ch.parentElement.children[1].style.textDecoration = 'none';
        }
    })

}

const $rightspan = document.querySelectorAll('.right .lnr-undo')

for (let $rs of $rightspan) {

    $rs.addEventListener('click', function (e) {

        if (e.target.parentElement.parentElement.children[0].children[1].matches('.bye1')) {
            e.target.classList.remove('class', 'lnr-checkmark-circle');
            e.target.classList.add('class', 'lnr-undo');
            const $divhi = document.createElement('div');
            $divhi.setAttribute('class', 'text');
            $divhi.textContent = e.target.parentElement.parentElement.children[0].children[1].value;
            console.log($divhi.textContent)
            console.log($divhi)
            console.log(e.target.parentElement.parentElement.children[0].children[1])
            e.target.parentElement.parentElement.children[0].children[1].remove();
            e.target.parentElement.parentElement.children[0].appendChild($divhi);
            return;
        }
        e.target.classList.remove('class', 'lnr-undo');
        e.target.classList.add('class', 'lnr-checkmark-circle');
        // console.log(e.target.parentElement.parentElement.children[0].children[1])
        const $hiinput = document.createElement('input');
        $hiinput.setAttribute('type', 'text')
        $hiinput.setAttribute('class', 'bye1')

        // $hiinput.setSelectionRange($hiinput.value.length, $hiinput.value.length);
        // $hiinput.setAttribute('autofocus')
        $hiinput.value = e.target.parentElement.parentElement.children[0].children[1].textContent;
        e.target.parentElement.parentElement.children[0].children[1].remove();
        e.target.parentElement.parentElement.children[0].appendChild($hiinput);
        $hiinput.focus();

        $hiinput.addEventListener('keyup', function (k) {
            if (k.key === 'Enter') {
                if (e.target.parentElement.parentElement.children[0].children[1].matches('.bye1')) {
                    e.target.classList.remove('class', 'lnr-checkmark-circle');
                    e.target.classList.add('class', 'lnr-undo');
                    const $divhi = document.createElement('div');
                    $divhi.setAttribute('class', 'text');
                    $divhi.textContent = e.target.parentElement.parentElement.children[0].children[1].value;
                    console.log($divhi.textContent)
                    console.log($divhi)
                    console.log(e.target.parentElement.parentElement.children[0].children[1])
                    e.target.parentElement.parentElement.children[0].children[1].remove();
                    e.target.parentElement.parentElement.children[0].appendChild($divhi);
                    return;
                }
            }
        })
    })

}