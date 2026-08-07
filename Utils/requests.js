const apiDomain = 'http://localhost:3000/api/properties' || null

//fetch all properties
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

//fetch single property
async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return null
    }

    const res = await fetch(`${apiDomain}/properties/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching properties:', error)
    return null
  }
}

export { fetchProperties, fetchProperty }