interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  if (!isOpen) return null;

  const name = "Juan Pérez";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="profile-header">
          <div className="profile-avatar">{initials}</div>
          <h2>{name}</h2>
          <p>Cliente Premium</p>
        </div>

        <div className="profile-content">
          <div className="profile-item">
            <span>Email</span>
            <strong>juan@email.com</strong>
          </div>

          <div className="profile-item">
            <span>Teléfono</span>
            <strong>+591 70000000</strong>
          </div>

          <div className="profile-item">
            <span>Ciudad</span>
            <strong>Sucre, Bolivia</strong>
          </div>

          <div className="profile-item">
            <span>Pedidos</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-primary">Editar Perfil</button>
          <button className="btn-secondary">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;