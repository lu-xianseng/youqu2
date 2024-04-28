from enum import Enum
from enum import unique

from setting.globalconfig import GlobalConfig


@unique
class SubCmd(Enum):
    run = "run"
    remote = "remote"
    playbook = "playbook"
    pmsctl = "pmsctl"
    csvctl = "csvctl"
    startapp = "startapp"
    git = "git"


def help_tip():
    return (
        f"\033[0;32mmanage.py\033[0m 支持 \033[0;32m{[i.value for i in SubCmd]}\033[0m 命令, "
        "\n您需要传入一个命令,可以使用 \033[0;32m-h\033[0m 或 \033[0;32m--help\033[0m 查看每个命令参数的详细使用说明,"
        "\n比如: \033[0;32myouqu manage.py run -h\033[0m \n"
    )


def start_app(startapp=None):
    if startapp:
        from src.startapp import StartApp

        start = StartApp(startapp)
        start.copy_template_to_apps()
        start.rewrite()


def trim():
    from src.depends.cfonts import say

    say(GlobalConfig.PROJECT_NAME)
    version_font = "slick"
    say(GlobalConfig.current_tag, font=version_font, space=False)
    say(f"Code: \033[0;32m{GlobalConfig.GITHUB_URL}\033[0m", font="console", space=False)
    say(f"Docs: \033[0;32m{GlobalConfig.DOCS_URL}\033[0m", font="console", space=False)
    say(f"PyPI: \033[0;32m{GlobalConfig.PyPI_URL}\033[0m", font="console", space=False)
    say("=" * 60, font="console", space=False)
