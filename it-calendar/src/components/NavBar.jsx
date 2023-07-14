import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Link, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ height: "7vh", width: "vmax" }}>
      <Toolbar>
        <Link
          variant="h6"
          component="button"
          color="secondary"
          style={{ marginLeft: "4vw" }}
          onClick={() => navigate("/calendar")}
        >
          Календарь
        </Link>
        {user.isAuth && (
          <Link
            variant="h6"
            component="button"
            color="secondary"
            style={{ marginLeft: 30 }}
            onClick={() => navigate("/addNew")}
          >
            Добавление
          </Link>
        )}
        {user.isAuth && (
          <Link
            variant="h6"
            component="button"
            color="secondary"
            style={{ marginLeft: 30 }}
            onClick={() => navigate("/edit")}
          >
            Изменение
          </Link>
        )}
        {user.isAuth && (
          <Link
            variant="h6"
            component="button"
            color="secondary"
            style={{ marginLeft: 30 }}
            onClick={() => navigate("/delete")}
          >
            Удаление
          </Link>
        )}
        {user.isAuth ? (
          <Button
            variant="h6"
            justifyContent="flex-end"
            component="button"
            color="secondary"
            style={{ marginLeft: 10 }}
            onClick={() => navigate("/auth")}
          >
            Выход
          </Button>
        ) : (
          <Button
            variant="h5"
            justifyContent="flex-end"
            component="button"
            color="secondary"
            style={{ marginLeft: 10 }}
            onClick={() => navigate("/auth")}
          >
            Вход
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
