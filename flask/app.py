from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def get_my_ip():
    # Obtener la IP del cliente.
    if 'X-Forwarded-For' in request.headers:
        client_ip = request.headers['X-Forwarded-For'].split(',')[0].strip()
    else:
        client_ip = request.remote_addr

    # ***************************************************************
    # LÓGICA AÑADIDA PARA IMPRIMIR LA IP EN LA CONSOLA DEL SERVIDOR
    # ***************************************************************
    print(f"[{request.remote_addr}] Nuevo cliente conectado. IP detectada: {client_ip}")
    # ***************************************************************

    return render_template('index.html', ip_address=client_ip)

if __name__ == '__main__':
    # Ejecutar la aplicación Flask en el puerto 5000
    # En un entorno de producción, 'debug=True' debe ser 'debug=False'
    # y se recomienda usar un servidor WSGI como Gunicorn o uWSGI.
    app.run