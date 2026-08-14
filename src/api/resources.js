const API_URL = import.meta.env.VITE_API_URL || "";

export async function getResources() {
    const response = await fetch(`${API_URL}/api/resources`);

    if (!response.ok) {
        throw new Error("Failed to fetch resources");
    }

    return response.json();
}

export async function getResource(id) {
    const response = await fetch(`${API_URL}/api/resources/${id}`);

    if (!response.ok) {
        throw new Error("Resource not found");
    }

    return response.json();
}

export async function createResource(resource) {
    const response = await fetch(`${API_URL}/api/resources`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
    });

    if (!response.ok) {
        throw new Error("Failed to create resource");
    }

    return response.json();
}

export async function updateResource(id, resource) {
    const response = await fetch(`${API_URL}/api/resources/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
    });

    if (!response.ok) {
        throw new Error("Failed to update resource");
    }

    return response.json();
}

export async function deleteResource(id) {
    const response = await fetch(`${API_URL}/api/resources/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete resource");
    }

    return response.json();
}