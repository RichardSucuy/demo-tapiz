import Link from 'next/link';
import { Search, Plus, Car } from 'lucide-react';
import styles from './page.module.css';

export default function Dashboard() {
  return (
    <main className={styles['page-container']}>
      <header 
          className={styles.header} 
          style={{ 
            backgroundColor: '#000000', 
            borderBottom: '1px solid #1A1A1A', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '0 24px',
            height: '70px'
          }}
        >
          {/* Contenedor del Logo */}
          <div className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 'bold', fontSize: '22px' }}>
            <img 
              src="/logo.jpeg" // Asegúrate de que la extensión sea correcta (.png, .svg, etc.)
              alt="Logo" 
              style={{ width: 'auto', height: '35px', objectFit: 'contain' }} 
            />
            <span style={{ color: '#FF0000', letterSpacing: '1px' }}>Grand <span style={{ color: '#FFFFFF' }}>Auto</span></span>
          </div>

          {/* Sección de Admin */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ color: '#999999', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Admin</span>
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: '8px', // Un toque más cuadrado/moderno
              backgroundColor: '#111111', 
              border: '1px solid #FF0000', // Borde rojo neón
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: '#FF0000', fontSize: '12px', fontWeight: 'bold' }}>AD</span>
            </div>
          </div>
        </header>

      {/* <section className={`${styles['hero-section']} glass-panel`}>
        <h1 className={styles['hero-title']}>Diseña Asientos Premium en 3D</h1>
        <p className={styles['hero-subtitle']}>
          Carga modelos, personaliza materiales, costuras y colores en tiempo real para impresionar a tus clientes.
        </p>
        <Link href="/editor" className="btn btn-primary" style={{ marginTop: '16px', fontSize: '16px', padding: '16px 32px' }}>
          <Plus size={20} />
          Nuevo Diseño
        </Link>
      </section> */}

      <section 
        className={`${styles['hero-section']} glass-panel`} 
        style={{ 
          backgroundColor: '#0A0A0A', // Negro ligeramente más suave que el fondo total para dar profundidad
          padding: '60px 40px',
          borderRadius: '16px',
          border: '1px solid #1A1A1A',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          textAlign: 'center',
          marginTop: '40px'
        }}
      >
        <h1 
          className={styles['hero-title']} 
          style={{ 
            color: '#FFFFFF', 
            fontSize: '42px', 
            fontWeight: '800', 
            marginBottom: '20px' 
          }}
        >
          Diseña Asientos <span style={{ color: '#FF0000' }}>Premium</span> en 3D
        </h1>
        
        <p 
          className={styles['hero-subtitle']} 
          style={{ 
            color: '#CCCCCC', // Gris claro para que no compita con el título
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}
        >
          Carga modelos, personaliza materiales, costuras y colores en tiempo real para impresionar a tus clientes.
        </p>

        <Link 
          href="/editor" 
          className="btn btn-primary" 
          style={{ 
            marginTop: '16px', 
            fontSize: '16px', 
            padding: '16px 32px',
            backgroundColor: '#FF0000', // Rojo vibrante
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
            boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
          }}
        >
          <Plus size={20} color="#FFFFFF" />
          Nuevo Diseño
        </Link>
      </section>

      {/* <section className={styles['projects-section']}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 className={styles['section-title']}>Proyectos Recientes</h2>
          <div className={styles['search-bar']}>
            <div style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
              <input type="text" placeholder="Buscar vehículo o cliente..." className="input-base" style={{ paddingLeft: '40px' }} />
            </div>
          </div>
        </div>

        <div className={styles['projects-grid']}>
          {[
            { id: 1, name: 'Asiento Deportivo V8', client: 'Audi R8', date: 'Hace 2 horas' },
            { id: 2, name: 'Línea Ejecutiva Classic', client: 'Mercedes S-Class', date: 'Ayer' },
            { id: 3, name: 'Bordado Personalizado', client: 'BMW M4', date: 'Hace 3 días' }
          ].map((project) => (
            <div key={project.id} className={`${styles['project-card']} glass-panel`}>
              <div className={styles['project-image-placeholder']}>
                <Car size={48} opacity={0.5} />
              </div>
              <div className={styles['project-info']}>
                <h3>{project.name}</h3>
                <p>{project.client}</p>
                <span style={{ fontSize: '12px', color: 'var(--primary)', marginTop: '8px', display: 'block' }}>{project.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section> */}


      <section className={styles['projects-section']} style={{ marginTop: '40px' }}>
        {/* Cabecera de Sección */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '700', borderLeft: '4px solid #FF0000', paddingLeft: '15px' }}>
            Proyectos Recientes
          </h2>
          <div className={styles['search-bar']}>
            <div style={{ position: 'relative', width: '320px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '12px', color: '#FF0000' }} />
              <input 
                type="text" 
                placeholder="Buscar vehículo o cliente..." 
                style={{ 
                  width: '100%',
                  padding: '12px 12px 12px 45px', 
                  backgroundColor: '#111111', 
                  border: '1px solid #333333', 
                  borderRadius: '8px', 
                  color: '#FFFFFF',
                  outline: 'none'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className={styles['projects-grid']} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { id: 1, name: 'Asiento Deportivo V8', client: 'Audi R8', date: 'Hace 2 horas', color: '#FF0000' },
            { id: 2, name: 'Línea Ejecutiva Classic', client: 'Mercedes S-Class', date: 'Ayer', color: '#333333' },
            { id: 3, name: 'Bordado Personalizado', client: 'BMW M4', date: 'Hace 3 días', color: '#FF0000' }
          ].map((project) => (
            <div 
              key={project.id} 
              className="glass-panel" 
              style={{ 
                backgroundColor: '#111111', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid #222222',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Sustituto de Imagen: Patrón tipo Fibra de Carbono / Abstracto */}
              <div style={{ 
                height: '160px', 
                background: `linear-gradient(135deg, #000000 0%, ${project.color} 300%)`, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Un patrón sutil de líneas de fondo */}
                <div style={{ position: 'absolute', opacity: 0.1, width: '100%', height: '100%', backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
                
                <Car size={60} color="#FFFFFF" style={{ opacity: 0.8, zIndex: 1 }} />
                <div style={{ position: 'absolute', bottom: '10px', right: '15px', color: '#FFFFFF', fontSize: '10px', fontWeight: 'bold', opacity: 0.5 }}>3D MODEL READY</div>
              </div>

              {/* Info del Proyecto */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '6px', fontWeight: '600' }}>{project.name}</h3>
                <p style={{ color: '#999999', fontSize: '14px', marginBottom: '12px' }}>{project.client}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#FF0000', fontWeight: '600' }}>{project.date}</span>
                  <button style={{ backgroundColor: 'transparent', border: '1px solid #FF0000', color: '#FF0000', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



    </main>
  );
}
