let userName = document.querySelector("#username");

async function fetchUser(username){
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
    console.log(result);
    displayUser(result);
}

document.querySelector("#searchBtn").addEventListener("click",() => {
    document.getElementById("userProfile").innerHTML = '<span class="loader ml-80"></span>'
    let username = userName.value;
    fetchUser(username);
})

function displayUser({avatar_url, name, bio, followers, following, public_repos, html_url}){
    if(!avatar_url){
        document.getElementById("userProfile").innerHTML = "<h1 class='text-6xl ml-36'>User Not Found!</h1>"
        return;
    }
    if(!bio){
        bio = '';
    }
    document.getElementById("userProfile").innerHTML = 
                                `
                                <div class="flex  flex-col gap-3">
                                            <div class="rounded-full overflow-hidden w-[90%]"><img class="w-full" src=${avatar_url} alt=""></div>
                                            <div class="text-center mr-10">
                                                <p class="text-4xl">${name}</p>
                                                <p class="text-md">${bio}</p>
                                            </div>
                                        </div>

                                        <div class="flex flex-col justify-center items-center h-full gap-25 ">
                                            <div class="flex justify-center items-center gap-15 text-2xl mr-5">
                                                <div>
                                                    <p>Follower</p>
                                                    <p>${followers}</p>
                                                </div>
                                                <div>
                                                    <p>Following</p>
                                                    <p>${following}</p>
                                                </div>
                                                <div>
                                                    <p>Repo</p>
                                                    <p>${public_repos}</p>
                                                </div>
                                            </div>
                                            <a href = ${html_url} target="_blank" class= "w-full"><div class="text-white bg-[#3B3A3A] w-full px-5 py-2 text-center rounded-full text-xl">View Profile</div></a>
                                        </div>
                                `
}