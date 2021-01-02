import userEvent from '@testing-library/user-event';

interface User {
    uid: string
    email: string
    displayName: string
    photoUrl?: string
    phoneNumber?: string
}

export default User;