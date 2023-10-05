const API_URL = "https://api.github.com/search/repositories?q=javascript"

const response = await fetch(API_URL)
export { }

if (!response.ok) {
    throw new Error('Request Failed')
}

const data = await response.json()

const repos = data.items.map(repo => {
    console.log(repo)
})
