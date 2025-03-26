import "./AccountPage.css"
import profileImage from "../assets/profile.png"

function AccountPage() {
  return (
    <div className="account-container">
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>

      <div className="account-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <span className="profile-badge">+</span>
          </div>

          <div className="profile-info">
            <h2>Marry Doe</h2>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

export default AccountPage

