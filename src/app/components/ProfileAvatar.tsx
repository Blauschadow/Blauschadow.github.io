import defaultAvatar from '../../imports/1778771257820.png';

export function ProfileAvatar() {
  return (
    <div className="relative w-full h-full">
      <img
        src={defaultAvatar}
        alt="Profile"
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}
