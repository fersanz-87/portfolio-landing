# 🔧 Comandos Git Útiles

Guía rápida de comandos Git para gestionar tu portfolio.

## 🚀 Primera Vez - Subir a GitHub

### 1. Inicializar Git en tu proyecto

```bash
cd /Users/fersanz/Desktop/portfolio-landing
git init
```

### 2. Agregar todos los archivos

```bash
git add .
```

### 3. Hacer el primer commit

```bash
git commit -m "Initial commit: Portfolio landing page with contact form"
```

### 4. Crear repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Click en el botón **"+"** → **"New repository"**
3. Nombre: `portfolio-landing`
4. Descripción: "Portfolio profesional con formulario de contacto"
5. Público o Privado (recomendado: Público para SEO)
6. **NO** marques "Initialize with README"
7. Click **"Create repository"**

### 5. Conectar tu repositorio local con GitHub

```bash
# Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/portfolio-landing.git
```

### 6. Renombrar rama a main (si es necesario)

```bash
git branch -M main
```

### 7. Subir tu código

```bash
git push -u origin main
```

---

## 🔄 Actualizaciones Diarias

Cada vez que hagas cambios en tu portfolio:

### Opción 1: Comando Rápido (Todo en uno)

```bash
git add . && git commit -m "Descripción de tus cambios" && git push
```

### Opción 2: Paso a Paso

```bash
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar todos los cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "Descripción de tus cambios"

# 4. Subir a GitHub
git push
```

---

## 📝 Ejemplos de Mensajes de Commit

Buenos mensajes de commit:

```bash
git commit -m "Add new project: E-commerce website"
git commit -m "Update contact email and phone number"
git commit -m "Fix responsive design on mobile devices"
git commit -m "Improve About section with new bio"
git commit -m "Add Google Analytics integration"
git commit -m "Update dependencies to latest versions"
```

Malos mensajes de commit:

```bash
git commit -m "changes"           # ❌ Muy vago
git commit -m "fix"               # ❌ No dice qué se arregló
git commit -m "asdfasdf"          # ❌ Sin sentido
git commit -m "."                 # ❌ Inútil
```

---

## 🔍 Comandos de Consulta

### Ver el estado actual

```bash
git status
```

### Ver historial de commits

```bash
git log

# Versión más compacta
git log --oneline

# Últimos 5 commits
git log -5 --oneline
```

### Ver qué cambios hiciste (antes de commit)

```bash
git diff
```

### Ver cambios en un archivo específico

```bash
git diff components/Hero.tsx
```

---

## ⏮️ Deshacer Cambios

### Descartar cambios en un archivo (antes de commit)

```bash
# Cuidado: esto elimina tus cambios no guardados
git checkout -- components/Hero.tsx
```

### Descartar TODOS los cambios (antes de commit)

```bash
# ⚠️ CUIDADO: Esto elimina todos los cambios no guardados
git checkout -- .
```

### Deshacer el último commit (pero mantener los cambios)

```bash
git reset --soft HEAD~1
```

### Deshacer el último commit (y eliminar los cambios)

```bash
# ⚠️ CUIDADO: Esto elimina los cambios permanentemente
git reset --hard HEAD~1
```

---

## 🌿 Trabajar con Ramas

### Crear una nueva rama

```bash
git checkout -b nueva-funcionalidad
```

### Ver todas las ramas

```bash
git branch
```

### Cambiar de rama

```bash
git checkout main
git checkout otra-rama
```

### Fusionar una rama con main

```bash
# 1. Cambiar a main
git checkout main

# 2. Fusionar la otra rama
git merge nueva-funcionalidad

# 3. Subir cambios
git push
```

### Eliminar una rama

```bash
# Localmente
git branch -d nombre-rama

# En GitHub
git push origin --delete nombre-rama
```

---

## 🔄 Sincronizar con GitHub

### Descargar cambios de GitHub

```bash
git pull
```

### Forzar descarga (sobrescribir cambios locales)

```bash
# ⚠️ CUIDADO: Esto elimina tus cambios locales
git fetch origin
git reset --hard origin/main
```

---

## 🆘 Solución de Problemas

### Error: "fatal: remote origin already exists"

```bash
# Eliminar el remote existente
git remote remove origin

# Agregar el correcto
git remote add origin https://github.com/TU-USUARIO/portfolio-landing.git
```

### Error: "Updates were rejected because the tip of your current branch is behind"

```bash
# Opción 1: Descargar cambios primero
git pull --rebase
git push

# Opción 2: Forzar push (⚠️ solo si estás seguro)
git push --force
```

### Error: "Please tell me who you are"

```bash
# Configurar tu identidad
git config --global user.email "tu-email@ejemplo.com"
git config --global user.name "Tu Nombre"
```

### Olvidé agregar un archivo al último commit

```bash
# Agregar el archivo
git add archivo-olvidado.tsx

# Modificar el último commit
git commit --amend --no-edit

# Subir (puede requerir force)
git push --force
```

### Subí archivos sensibles (.env) por error

```bash
# 1. Eliminar del repositorio (pero mantener localmente)
git rm --cached .env

# 2. Asegurarte de que .env está en .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore

# 3. Commit
git add .gitignore
git commit -m "Remove sensitive files and update .gitignore"

# 4. Push
git push
```

**⚠️ IMPORTANTE:** Si subiste API keys, considéralas comprometidas y regenera nuevas en Resend.

---

## 📦 Ignorar Archivos

El archivo `.gitignore` ya está configurado, pero si necesitas agregar más:

```bash
# Agregar un archivo específico
echo "mi-archivo-secreto.txt" >> .gitignore

# Agregar una carpeta
echo "carpeta-privada/" >> .gitignore

# Agregar todos los archivos de un tipo
echo "*.log" >> .gitignore
```

---

## 🔐 Autenticación con GitHub

### Usar Token de Acceso Personal (Recomendado)

GitHub ya no permite contraseñas. Usa un token:

1. Ve a GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **"Generate new token"**
3. Selecciona permisos: `repo` (todos)
4. Copia el token (¡guárdalo! no lo verás de nuevo)
5. Usa el token como contraseña cuando Git te lo pida

### Guardar Credenciales

```bash
# Guardar credenciales permanentemente
git config --global credential.helper store

# La próxima vez que hagas push, ingresa:
# Usuario: tu-usuario-github
# Contraseña: tu-token-de-acceso
```

### Usar SSH (Alternativa)

```bash
# 1. Generar clave SSH
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# 2. Copiar la clave pública
cat ~/.ssh/id_ed25519.pub

# 3. Agregar en GitHub: Settings → SSH and GPG keys → New SSH key

# 4. Cambiar remote a SSH
git remote set-url origin git@github.com:TU-USUARIO/portfolio-landing.git
```

---

## 📊 Comandos Avanzados

### Ver quién modificó cada línea de un archivo

```bash
git blame components/Hero.tsx
```

### Buscar en el historial

```bash
# Buscar commits que mencionen "contact"
git log --grep="contact"

# Buscar cambios en el código
git log -S "resend"
```

### Crear un tag (versión)

```bash
# Crear tag
git tag -a v1.0.0 -m "Primera versión en producción"

# Subir tag
git push origin v1.0.0

# Subir todos los tags
git push --tags
```

### Ver diferencias entre ramas

```bash
git diff main..otra-rama
```

---

## 🎯 Workflow Recomendado

### Para Cambios Pequeños (Día a Día)

```bash
# 1. Hacer cambios en tu código
# 2. Probar localmente (npm run dev)
# 3. Subir a GitHub
git add .
git commit -m "Descripción clara del cambio"
git push
# 4. Vercel despliega automáticamente
```

### Para Funcionalidades Grandes

```bash
# 1. Crear rama para la funcionalidad
git checkout -b nueva-funcionalidad

# 2. Hacer cambios y commits
git add .
git commit -m "Add: primera parte de la funcionalidad"
# ... más cambios ...
git commit -m "Add: segunda parte de la funcionalidad"

# 3. Probar completamente

# 4. Fusionar con main
git checkout main
git merge nueva-funcionalidad

# 5. Subir
git push

# 6. Eliminar rama (opcional)
git branch -d nueva-funcionalidad
```

---

## 📚 Recursos

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Para cuando algo sale mal

---

## 🎓 Comandos para Copiar y Pegar

### Setup Inicial Completo

```bash
cd /Users/fersanz/Desktop/portfolio-landing
git init
git add .
git commit -m "Initial commit: Portfolio landing page"
git remote add origin https://github.com/TU-USUARIO/portfolio-landing.git
git branch -M main
git push -u origin main
```

### Actualización Rápida

```bash
git add . && git commit -m "Update portfolio content" && git push
```

### Ver Estado y Últimos Cambios

```bash
git status && git log -5 --oneline
```

---

**¡Ahora eres un experto en Git! 🚀**

*Para más ayuda, consulta [DEPLOYMENT.md](./DEPLOYMENT.md)*

