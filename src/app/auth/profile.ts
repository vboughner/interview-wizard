/*
 * Profile information about an individual user.
 *
 * Users are identified by their unique email address, as stored in the authentication system and the User type,
 * here in the Profile, we link to the user by using the same unique email address, but we provide a richer set
 * of data about the user.
 */
export class Profile {
  constructor(
    public email: string,           // unique identifier, same as the one in the User object for authentication
    public displayName: string,     // how the user name will be shown
    public isAdmin: boolean,        // true if user has permission to administrate
    public photoUrl: string,        // where is this user's profile image stored
    public webSiteUrl: string       // where is this user on the web
  ) {}
}
