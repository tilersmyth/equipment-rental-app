import { Container } from 'unstated';

class UserContainer extends Container {
  constructor(props = {}) {
    super();
    this.state = {
      isAuth: props.initAuth || false,
      user: props.initUser || {},
    };
  }

  setUser = async (isAuth, user) => {
    await this.setState({ isAuth, user });
  };
}

export default UserContainer;
