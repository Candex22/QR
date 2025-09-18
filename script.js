 let qrInstance = null;
        
        // Función para mostrar/ocultar mensajes
        function showMessage(elementId, show = true) {
            const element = document.getElementById(elementId);
            if (show) {
                element.classList.add('show');
                setTimeout(() => element.classList.remove('show'), 3000);
            } else {
                element.classList.remove('show');
            }
        }

        // Función para validar URL
        function isValidURL(string) {
            try {
                new URL(string);
                return true;
            } catch (_) {
                // Intenta con https://
                try {
                    new URL('https://' + string);
                    return true;
                } catch (_) {
                    return false;
                }
            }
        }

        // Función para normalizar URL
        function normalizeURL(url) {
            url = url.trim();
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            return url;
        }

        // Genera el QR con los datos ingresados
        function generateQR() {
            const linkInput = document.getElementById('link');
            const link = linkInput.value.trim();
            const color = document.getElementById('color').value;
            const size = parseInt(document.getElementById('size').value);
            const qrContainer = document.getElementById('qrcode');
            const generateBtn = document.getElementById('generateBtn');
            const downloadBtn = document.getElementById('downloadBtn');

            // Validaciones
            if (!link) {
                showMessage('errorMessage');
                linkInput.focus();
                return;
            }

            if (!isValidURL(link)) {
                document.getElementById('errorMessage').textContent = '❌ Error: Por favor, ingresá una URL válida (ej: https://github.com/tu-usuario)';
                showMessage('errorMessage');
                linkInput.focus();
                return;
            }

            // Normalizar URL
            const normalizedURL = normalizeURL(link);

            // Mostrar loading
            showMessage('loading', true);
            generateBtn.disabled = true;
            generateBtn.textContent = '⏳ Generando...';

            // Limpiar mensajes anteriores
            showMessage('errorMessage', false);
            showMessage('successMessage', false);

            // Limpiar el QR previo
            qrContainer.innerHTML = '';
            qrContainer.classList.remove('has-qr');
            downloadBtn.classList.remove('show');

            // Pequeño delay para mostrar la animación de loading
            setTimeout(() => {
                try {
                    // Generar QR usando qrcode.js
                    QRCode.toCanvas(normalizedURL, {
                        width: size,
                        height: size,
                        color: {
                            dark: color,
                            light: '#ffffff'
                        },
                        errorCorrectionLevel: 'H'
                    }, (error, canvas) => {
                        // Ocultar loading
                        showMessage('loading', false);
                        generateBtn.disabled = false;
                        generateBtn.textContent = '🔄 Generar Código QR';

                        if (error) {
                            document.getElementById('errorMessage').textContent = '❌ Error al generar el código QR. Intentá de nuevo.';
                            showMessage('errorMessage');
                            return;
                        }

                        // Mostrar el canvas
                        qrContainer.appendChild(canvas);
                        qrContainer.classList.add('has-qr');
                        
                        // Mostrar botón de descarga y mensaje de éxito
                        downloadBtn.classList.add('show');
                        showMessage('successMessage');

                        // Guardar referencia para descarga
                        qrInstance = canvas;
                    });

                } catch (error) {
                    console.error('Error:', error);
                    showMessage('loading', false);
                    generateBtn.disabled = false;
                    generateBtn.textContent = '🔄 Generar Código QR';
                    document.getElementById('errorMessage').textContent = '❌ Error inesperado. Revisá tu conexión e intentá de nuevo.';
                    showMessage('errorMessage');
                }
            }, 800);
        }

        // Descarga el QR como imagen PNG
        function downloadQR() {
            if (!qrInstance) {
                alert("Primero generá el QR 😉");
                return;
            }

            try {
                const dataUrl = qrInstance.toDataURL("image/png");
                const link = document.createElement('a');
                const timestamp = new Date().toISOString().slice(0, 10);
                link.href = dataUrl;
                link.download = `codigo_qr_pwd_${timestamp}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Mensaje de confirmación
                const originalText = document.getElementById('downloadBtn').textContent;
                document.getElementById('downloadBtn').textContent = '✅ ¡Descargado!';
                setTimeout(() => {
                    document.getElementById('downloadBtn').textContent = originalText;
                }, 2000);

            } catch (error) {
                console.error('Error al descargar:', error);
                alert("Error al descargar la imagen. Intentá de nuevo.");
            }
        }

        // Permitir generar QR con Enter
        document.getElementById('link').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateQR();
            }
        });

        // Auto-focus en el input al cargar
        window.addEventListener('load', function() {
            document.getElementById('link').focus();
        });

        // Limpiar mensajes cuando el usuario empieza a escribir
        document.getElementById('link').addEventListener('input', function() {
            showMessage('errorMessage', false);
        });