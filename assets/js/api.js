

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/felipevDev/Portfolio---Web-Developer/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}