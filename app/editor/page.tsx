'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Download, HelpCircle, AlertTriangle } from 'lucide-react';
import SeatModel3D from '../../components/SeatModel3D';
import styles from './page.module.css';

const AVAILABLE_COLORS = [
  '#101010', // Oscuro
  '#EBEBEB', // Claro
  '#D4AF37', // Dorado
  '#9E1B1B', // Rojo Deportivo
  '#1B4F9E', // Azul Royal
  '#8B4513', // Cuero Marrón
  '#2E8B57', // Verde Oscuro
  '#808080', // Gris
  '#FF8C00', // Naranja
  '#4B0082', // Indigo
];

export default function Editor() {
  const [activeZone, setActiveZone] = useState<'base' | 'espaldar' | 'cabezal'>('base');
  const [colors, setColors] = useState({
    base: '#101010',
    espaldar: '#101010',
    cabezal: '#101010'
  });
  const [embroideryText, setEmbroideryText] = useState('');

  const [loading, setLoading] = useState(true);

  // Simulate initial load for WOW effect
  setTimeout(() => { setLoading(false) }, 800);

  const handleColorChange = (color: string) => {
    setColors(prev => ({ ...prev, [activeZone]: color }));
  };

  return (
    <div className={styles['editor-container']}>
      {loading && (
        <div className={styles['loader-overlay']}>
          <div style={{ width: 40, height: 40, border: '4px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <p>Preparando entorno 3D premium...</p>
        </div>
      )}

      <div className={styles['top-bar']}>
        <Link href="/" className="btn btn-icon">
          <ArrowLeft size={18} />
        </Link>
        <button className="btn btn-secondary">
          <Save size={18} /> Guardar
        </button>
        <button className="btn btn-primary" onClick={() => alert("Simulando exportación de fotograma 3D...")}>
          <Download size={18} /> Exportar HQ
        </button>
      </div>

      <div className={styles['canvas-area']}>
        {/* Aquí enviamos los colores al modelo en vivo */}
        <SeatModel3D colors={colors} />
      </div>

      <div className={`${styles['controls-sidebar']} glass-panel`}>
        <div className={styles['panel-header']}>
          <h2 className={styles['panel-title']}>Centro de Diseño</h2>
          <button className="btn-icon" title="Ayuda"><HelpCircle size={16} /></button>
        </div>
        
        <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '12px', borderRadius: '8px', marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <AlertTriangle size={18} color="var(--primary)" />
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Usando Asiento Proxy 3D. Pega tu archivo `asiento.glb` en la carpeta `public` para usar el real.</p>
        </div>

        <div className={styles['controls-panel']}>
          
          {/* SECCIÓN ZONAS */}
          <div className={styles.section}>
            <span className={styles['section-label']}>Área a Personalizar</span>
            <div className={styles['zone-selector']}>
              <button 
                className={`${styles['zone-btn']} ${activeZone === 'cabezal' ? styles.active : ''}`}
                onClick={() => setActiveZone('cabezal')}
              >Cabezal</button>
              <button 
                className={`${styles['zone-btn']} ${activeZone === 'espaldar' ? styles.active : ''}`}
                onClick={() => setActiveZone('espaldar')}
              >Espaldar</button>
              <button 
                className={`${styles['zone-btn']} ${activeZone === 'base' ? styles.active : ''}`}
                onClick={() => setActiveZone('base')}
              >Base</button>
            </div>
          </div>

          {/* SECCIÓN MATERIALES / COLORES */}
          <div className={styles.section}>
            <span className={styles['section-label']}>Color de la Zona ({activeZone})</span>
            <div className={styles['color-grid']}>
              {AVAILABLE_COLORS.map(color => (
                <button
                  key={color}
                  className={`${styles['color-btn']} ${colors[activeZone] === color ? styles.active : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>

          {/* SECCIÓN BORDADO */}
          <div className={styles.section}>
            <span className={styles['section-label']}>Bordado (Simulación)</span>
            <input 
              type="text" 
              placeholder="Ej: Iniciales o Modelo" 
              className="input-base"
              value={embroideryText}
              onChange={(e) => setEmbroideryText(e.target.value)}
            />
          </div>
          
          <div className={styles.section}>
             <button className="btn btn-secondary" style={{ width: '100%' }}>Cambiar Patrón de Costuras</button>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
