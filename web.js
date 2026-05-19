let btn = document.getElementById("btn")

let input = document.getElementById("input")

let list = document.getElementById("list")

let count = document.getElementById("count")

let num = 0


btn.onclick = function () {

    let text = input.value

    if (text == "") {

        alert("write task")

    }

    else {

        let li = document.createElement("li")

        let span = document.createElement("span")

        span.innerHTML = text

        li.appendChild(span)


        

        let del = document.createElement("button")

        del.innerHTML = "Delete"

        del.classList.add("del")

        li.appendChild(del)


        

        list.appendChild(li)

        input.value = ""


        

        num++

        count.innerHTML = "Tasks : " + num


        

        span.onclick = function () {

            span.classList.toggle("done")

        }


        

        del.onclick = function () {

            li.remove()

            num--

            count.innerHTML = "Tasks : " + num

        }

    }

}
