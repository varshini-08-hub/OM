#victory-modal h2 {
  font-size: 26px;
  font-weight: 900;
  color: #065F46;
  margin-bottom: 8px;
}
#victory-modal p {
  font-size: 14.5px;
  color: #1F2937;
  line-height: 1.5;
  margin-bottom: 24px;
}
.victory-replay-btn {
  background: var(--accent-green);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(6, 214, 160, 0.4);
  transition: all 0.2s ease;
}
.victory-replay-btn:hover {
  transform: scale(1.05);
  background: #05B385;
}
/* Mobile / Responsive adjustments */
@media (max-width: 768px) {
  .top-bar { flex-direction: column; gap: 8px; }
  .quest-card { max-width: 100%; }
  .bottom-bar { flex-direction: column-reverse; align-items: center; gap: 8px; }
  .companion-dock { overflow-x: auto; width: 100%; justify-content: center; }
  .char-tab { min-width: 60px; padding: 6px 8px; }
  .char-role { display: none; }
  #dialog-box { bottom: 150px; }
}
