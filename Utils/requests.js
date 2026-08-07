const apiDomain = 'http://localhost:3000/api/properties' || null

async function fetchProperties() {
  try {
    if (!apiDomain) {
      return []
    }

    const res = await fetch(apiDomain)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}

export { fetchProperties }