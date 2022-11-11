export default {
    "get": {
        "tags": [
            "billPayment"
        ],
        "summary": "Update an existing pet",
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": {
            "description": "Update an existent pet in the store",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Pet"
                    }
                },
                "application/xml": {
                    "schema": {
                        "$ref": "#/components/schemas/Pet"
                    }
                },
                "application/x-www-form-urlencoded": {
                    "schema": {
                        "$ref": "#/components/schemas/Pet"
                    }
                }
            },
            "required": true
        },
        "responses": {
            "200": {
                "description": "Successful operation",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Pet"
                        }
                    },
                    "application/xml": {
                        "schema": {
                            "$ref": "#/components/schemas/Pet"
                        }
                    }
                }
            },
            "400": {
                "description": "Invalid ID supplied"
            },
            "404": {
                "description": "Pet not found"
            },
            "405": {
                "description": "Validation exception"
            }
        },
        "security": [
            {
                "petstore_auth": [
                    "write:pets",
                    "read:pets"
                ]
            }
        ]
    },
    "post": {
        "tags": [
            "billPayment"
        ],
        "summary": "Add a new pet to the store",
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": {
            "description": "Create a new pet in the store",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Pet"
                    }
                },
                "application/xml": {
                    "schema": {
                        "$ref": "#/components/schemas/Pet"
                    }
                },
                "application/x-www-form-urlencoded": {
                    "schema": {
                        "$ref": "#/components/schemas/Pet"
                    }
                }
            },
            "required": true
        },
        "responses": {
            "200": {
                "description": "Successful operation",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Pet"
                        }
                    },
                    "application/xml": {
                        "schema": {
                            "$ref": "#/components/schemas/Pet"
                        }
                    }
                }
            },
            "405": {
                "description": "Invalid input"
            }
        },
        "security": [
            {
                "petstore_auth": [
                    "write:pets",
                    "read:pets"
                ]
            }
        ]
    }
}; 