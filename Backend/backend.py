# backend.py
# Código del servidor backend en Python para manejar el registro de barberos y enviar correos electrónicos de confirmación

from flask import Flask, request, jsonify
import smtplib

app = Flask(__name__)

@app.route('/register_barber', methods=['POST'])
def register_barber():
    data = request.get_json()
    # Lógica para validar y procesar los datos del formulario de registro
    # Aquí deberías almacenar los datos en la base de datos y enviar el correo electrónico de confirmación
    success = True  # Simulando un registro exitoso
    if success:
        send_confirmation_email(data['nombre'], data['email'], data['usuario'], data['contrasena'])
        return jsonify({'success': True, 'message': 'Barbero registrado con éxito'})
    else:
        return jsonify({'success': False, 'message': 'Error en el registro'})

def send_confirmation_email(nombre, email, usuario, contrasena):
    # Configurar el servidor SMTP y enviar el correo electrónico de confirmación
    # Ejemplo utilizando la biblioteca smtplib
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    sender_email = 'tu_correo@gmail.com'
    sender_password = 'tu_contraseña'
    
    message = f"""\
    Subject: Confirmación de Registro
    
    Hola {nombre},
    
    Te has registrado exitosamente como barbero en nuestro sitio web.
    
    Aquí están tus credenciales de inicio de sesión:
    Nombre de usuario: {usuario}
    Contraseña: {contrasena}
    
    ¡Gracias por registrarte!
    """
    
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, email, message)

if __name__ == '__main__':
    app.run(debug=True)
