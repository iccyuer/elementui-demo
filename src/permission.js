
import router from './router';
router.beforeEach((to, from, next) => {
    // alert('before');
    // alert(from.name+to.name);
    next();
});

router.afterEach(() => {
    // alert('after');
});