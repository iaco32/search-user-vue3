export interface User {
    gender: string;
    name: {
        title?: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
    };
    email: string;
    login: {
        username: string;
    };
    dob: {
        age: number;
    }
    registered: {
        age: number;
    }
    phone: string;
    cell: string;
    id: {
        name?: string;
        value?: string;
    }
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
} 