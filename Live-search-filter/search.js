const search = document.getElementById('input')
const result = document.getElementById('result')
const userlist = []

async function GetData(){
    const info = await fetch('https://randomuser.me/api/?results=10')

    const data = await info.json()

    result.innerHTML= ''

    data.results.forEach(profile => {const li = document.createElement('li')

    userlist.push(li)

    li.innerHTML = `<img src="${profile.picture.large}" alt="Name">
    <div class="user-info">
        <h4>${profile.name.first}</h4>
        <p>${profile.location.city}, ${profile.location.country}</p>
    </div>`

    result.appendChild(li)
        
    });

    result.appendChild(lii)
    lii.classList.add('hide')

}

GetData()

const lii = document.createElement('li')
lii.innerHTML = `<h3>No User Found</h3>`

function ProfileFilter(searched){
    let gate = true
    userlist.forEach(user=>{
        if(user.innerText.toLowerCase().includes(searched.toLowerCase())){
            user.classList.remove('hide')
            gate = false
        }
        else{
            user.classList.add('hide')
        }
        if(gate){
            lii.classList.remove('hide')
        }
        else{
            lii.classList.add('hide')
        }
    })

}

search.addEventListener('input', (e)=>ProfileFilter(e.target.value))

