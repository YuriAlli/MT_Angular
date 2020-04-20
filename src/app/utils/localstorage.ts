export class Localstorage {
    public obterUsuario() {
        return JSON.parse(localStorage.getItem('mt.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.userToken);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('mt.token');
        localStorage.removeItem('mt.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('mt.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('mt.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('mt.user', JSON.stringify(user));
    }
}
