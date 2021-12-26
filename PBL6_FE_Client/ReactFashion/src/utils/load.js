export const Load = () => {
    setTimeout(() => {
        try {
            const links = ['/assets/js/bootstrap.min.js','/assets/js/chosen.min.js','/assets/js/countdown.min.js','/assets/js/jquery.scrollbar.min.js','/assets/js/lightbox.min.js','/assets/js/magnific-popup.min.js','/assets/js/jquery.zoom.min.js','/assets/js/threesixty.min.js','/assets/js/jquery-ui.min.js','/assets/js/mobilemenu.js','/assets/js/functions.js',]
            links.map(value => {
                const script = document.createElement('script')
                script.src = value
                return document.body.append(script)
            })
        } catch (error) {
            window.location.reload()
        }
    }, 400)
}