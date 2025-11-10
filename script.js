const users = [
  {
    fullName: "Tony Stark",
    available: true,
    profession: "Mechanical Engineer",
    fees: 360,
    company: "Stark Industries",
    skills: ["AI", "Robotics", "JavaScript", "C++", "CAD", "3D Printing", "Microcontrollers"],
    description: "Inventor, genius, and a tech mogul with a suit of iron.",
    profilePhoto: "https://th.bing.com/th/id/OIP.JRpq8PpOAss1co9wxzKUNAHaKR?w=212&h=294&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
  },
  {
    fullName: "Bruce Banner",
    available: false,
    profession: "Nuclear Engineer",
    fees: 350,
    company: "Gamma Labs",
    skills: ["Nuclear Physics", "Python", "Biotech", "Data Analysis", "AI", "C#", "Matlab"],
    description: "Brilliant scientist with a big green alter ego.",
    profilePhoto: "https://th.bing.com/th/id/OIP.s6KL5qJjsquaT7hkFIaiPgAAAA?w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
  },
  {
    fullName: "Shuri",
    available: true,
    profession: "Tech Engineer",
    fees: 400,
    company: "Wakanda Tech",
    skills: ["Vibranium Tech", "UI/UX", "Python", "Cybersecurity", "Machine Learning", "JavaScript"],
    description: "Wakanda’s tech princess and future-forward inventor.",
    profilePhoto: "https://th.bing.com/th?q=Shuri+Black+Panther+Casual+Outfits&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
  },
  {
    fullName: "Peter Parker",
    available: true,
    profession: "Software Engineer",
    fees: 150,
    company: "Daily Bugle Devs",
    skills: ["Node.js", "React", "MongoDB", "Web Development", "JavaScript", "Photography",],
    description: "Your friendly neighborhood developer.",
    profilePhoto: "https://th.bing.com/th/id/OIP.bu1cOyFKpPZchC0uYXkXiQHaHZ?w=148&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    fullName: "Natasha Romanoff",
    available: false,
    profession: "Cybersecurity Engineer",
    fees: 600,
    company: "S.H.I.E.L.D.",
    skills: ["Hacking", "Network Security", "Python", "Linux", "Social Engineering", "Forensics"],
    description: "Espionage expert and cybersecurity strategist.",
    profilePhoto: "https://th.bing.com/th/id/OIP.xqWPlIBt6YNg-ZYujJrF3AHaKJ?w=138&h=189&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    fullName: "T'Challa",
    available: true,
    profession: "Systems Engineer",
    fees: 450,
    company: "Wakanda Systems",
    skills: ["AI", "Vibranium Systems", "Control Systems", "Python", "Data Structures", "C++"],
    description: "King and engineer leading with tech and tradition.",
    profilePhoto: "https://th.bing.com/th/id/OIP.miqrjdnMOfpoYItkVgeLWgHaHa?w=145&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    fullName: "Barbara Gordon",
    available: true,
    profession: "Software Engineer",
    fees: 220,
    company: "Gotham Tech",
    skills: ["Java", "Cybersecurity", "Python", "AI", "Database Design", "Frontend Development"],
    description: "Code by day, crime-fighting at night.",
    profilePhoto: "https://th.bing.com/th/id/OIP.gL0bTf2xA8sY1p6Advh7_wHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    fullName: "Reed Richards",
    available: false,
    profession: "Aerospace Engineer",
    fees: 500,
    company: "Fantastic Labs",
    skills: ["Space Engineering", "Machine Learning", "C++", "Matlab", "Quantum Mechanics", "AI"],
    description: "The smartest mind in the multiverse.",
    profilePhoto: "https://th.bing.com/th/id/OIP.lZFBDJbdMLsh7W6HtSxyHAHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    fullName: "Victor Stone",
    available: true,
    profession: "Robotics Engineer",
    fees: 200,
    company: "Cyborg Tech",
    skills: ["Embedded Systems", "Cybernetics", "Python", "IoT", "JavaScript", "Hardware Design"],
    description: "Half man, half machine, full engineer.",
    profilePhoto: "https://ts4.mm.bing.net/th?id=OIP.u1ImUF7dUzPN6OEc-IlrmQHaIR&pid=15.1"
  },
  {
    fullName: "Riri Williams",
    available: true,
    profession: "AI Engineer",
    fees: 130,
    company: "Ironheart Labs",
    skills: ["AI", "ML", "Deep Learning", "Python", "JavaScript", "Circuit Design", "Cloud Services"],
    description: "Young genius continuing the Iron legacy.",
    profilePhoto: "https://th.bing.com/th/id/OIP.pnIze3pp9v9lsdTTUaN2xgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    fullName: "Morgan Stark",
    available: false,
    profession: "Quantum Engineer",
    fees: 180,
    company: "Future Foundation",
    skills: ["Quantum Mechanics", "Nanotech", "AI", "Time Simulation", "Mathematica", "Quantum Circuits"],
    description: "Prodigy working to unite Stark tech with multiverse research.",
    profilePhoto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xAA9EAACAQMCAwYDBQcEAQUAAAABAgMABBEFIRIxQQYTIlFhcRQygSNCkaHBB1Kx0eHw8RUkYsIzNVNygpL/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/xAAkEQACAgICAQUAAwAAAAAAAAAAAQIRAyESMRMEIjJBURQzkf/aAAwDAQACEQMRAD8AVL1op7mH4tuK1UnKjH6g1NpNjZS3k0MUsjwyDwsoyyqD8j9N9iCMHY+1VhJb959qxKepGPfcfrXtgbZQbO/mSMvxlI49wfPIO9YbajSFphLWdMtZ7gqshRokVUwRwqB0xUlibLS7c90qhzggsOIH0P5UKutRhCtNbu8xYZdZBgq3X6V9sdfjj41k09ZBImMgjwnG+M8qDxz472Mj3sm1K0la8ET/AGXEhcBMFQueh+tR3+nCT4YwRNEXQFnTLAkcvrzNVpr4/E288TMyohQoTyGdxRP4i4sLaGW4DxidBLAUkGcHcHAO222Dj2o0p0qKfulop6bo7RvwTgF2ORkZDZ226Zyfevd4X0aaMfDyKwOylQBncY3GKt2WqTSXqSSqvAWGcEKPwps/aBeRPommGKFZMZK5A28z/Cm8ZXsZ401YlQRRXGqWt7a6U1h3Qy6RqzRuQDhhnrnYjlyq3qsk8iG4ns5llm8QEqd2R64OPwH6V60TVhDIFvNPfuj95YyceuwrU9AtdM1mwDRGG9tm2eORc4PsdwaGUbZfjVGQrrdstssctuLiONQmCfCcYGQRy3zvUfwEFqYr43nezDDIGxhevCx6t6e1PPbP9mz2wa80AKbdfE9sxOUx1HmPTn70sW2ka7c6FcR2fc3ccUoj7lCCTnB41zvz9dgpoZQ46QlxOi1iwSOaFpkiRvEFUb425bdcV41uW3h0yO3fcXwEhlQ5ZAu4Qj3I32/Kl5EmF6iyovfQvlo+63/+NWNYa+U9zPOIorohTE33OE8z+OfalrClNUS9UVbG4GmzK8aMZFJGWbp5YppTW21NY7OUmNSFJQfeOf4Uo3FlMZnS3XvoozwtLGCQR5jIBx9KL2VuZb9DIhgVeFXlYlkBzt7DFOywhNW+yc5JUh5tUtnMaI6vbS/Yhcn7Jjnxfr5VQ1DQ4QyF0cFZCp+GUAyEgYyTy23opLZaNeWbS2swidMjhRsBj9djnzqXs7LALG6jnXvEVAzO5AEIOeea4v8AIlBcobp9ArYo3mgK9o1tHEg4WZ7eMSBpgM822AIOCNutS6Pot01rFc2cs8V5j7WB7dlI59evPOcVQuWbUtSubq3jkniV8QSDijeFBuG5Y4ee3Oi41PXJUiY2RuIlQBJ3bu25dGwMj8a6c3Ph32ToVTPHEfCgXiHEoI5/351LA0fB4cF13fBwD7ZoSrEuJIuFpGJ8IGcj2qzxtKJbaZOHB4txgqf5U1rRdE17GgnQq6wyk8TSgk7Y8vPnQtngUuI2OOL7MZ2I86uzq0uo9zcsYxGMSOVzjA5V6tbHgikkKmSAnwOiZBPQ/wBKNNJUyIijj7uDMmwbpnc/5rxc3bySFmYtKebsc8I8qrzysZCXYk5yx8zUEYkmbCjPkKdFUNSLlnKVnDNmTH3mpq1rUhqelxCKMBLZQqhTyzzzQXTNHmnYEAgedM8OjiG0aMMctz2qnJWNjjlQs6TdzKw7q7uonU7LwBs+1aP2Sv7t7lJpYxI2ADJBmKU+8bfMPYsfakSfs8DIWQA+jAUc7PT/AAssYjv5NMueR70mS3l8sg8j60MpIJQkjVJu0EEylYpsSA4ZG8LD0K8xWfdp7VDJLqFn3scrkLIkZKurZAzt6dak1yeSVki1SJba4Yf7e6iJZHPThb/qT7UDj1SZbltN1lQS64WVTgSKeRP9+lLkuWyOC40BnnVHa4mtm45Twg/KufXr64q9cjR4XgBmvCxWOQwzqvAu+44s+XkORoaunX8t6Pg7W5uo2lCsoiZiSPM+eKtz6TqllHcJJo90plz9pPb7BfMNz4qrjsyOLReme3kt1+Dla373jBKAME8wM9MjYZ2zUEkFrFNDBcuwuEVfDghXU8w3P8M5oJZzTROjxxF3UAhDuvqfUUV1DVUuOJLa2hhjL8aqoLcBxvjyH0pfjafYDGC306NLNbnSzFFwsQveTEYH8M1M7wpG8don/lCiZFkVyGG+2/50taVqUbO4YcQ7vYSD5SN/CR1NM9ld28ZeaFeHhHCzuoZVxjfbfJ6+9c3JinFuUtlxQHur6C6tJEudTVE4+KW2DqnHwnILMMtxZ/xUOn9otPSwJuDqkt3Icnguiqx48tt81BPo1hdSXCSX+H7gyxdxIpQNz4SCBz8udA2b4Qo1tKY3ZSrZHL+/WupCEXHeymMHZSyaNLyWGKNhFHxLI/IsN8e1fNZv7K6tEvW7qG5AaN1IyeW3Lcj/ABQ+1u5tLuEMLEhwVkQsQGXyOKtx2WnXQSe+aFU/9lWJyf76mkte/nIbzXFIERW1vPbn4TUX+K+Y96CnGT1G/vV9pprWxKyyqzlM4VdgRkZq7AlkLlYjdwwsdlVhkHbkPwqjr7SW9pwAnupTxAZzuOfrTU+ckgVtiw5y2/POcedM/ZjRHuMSSL4SaV7eRTcjj5cYUCtg0O1WG0j4BgcI3p+ZuKNmCKbJ7XT44kUKgH0qeS257VdjTcYr2yYrOpGziBmtV/dqF9PikzxKp9GFF5FNRcGdqK7K4i1fLc2NvJBgT2T/ADW8m4Ht5edD2it7qK2uJVcpBJxLv8w6gkfTNO1xYie2YMMnFZVquovo+u3EAOYCw418/wCtHFN6Fy4rbHm47RyzQCGLESp9wZAx7Va0DtFdxXkfFISmdwCcN6Uq6ZdRXlg9xAJO8ILBGAwQPUdcVdtmjZIZgRwsQd6DakbLxuNI+/tK0KDSbyy1DS42jtdSZnf7U8KPsSvDnGNyeXnS1ZQGXu4ml+1aThSNdjn3xW42OlWvaLsu+nXyHuwfAy/MjcwwrBbnvNG1q8028jnfuJmiddgTg7EHoCN8+Rp0otq0cLJCpaDEn+n27fCfCzQXLHMfE2WHnxdMZz5GvtzqlpHf2UepPLLZKxW6jiGCVXoCDvk+3KgstxJcySyyT2/eYGWyMsBt9apXUkWPBKDtseALncjkKXHCrtgxCfDY3eqzLBJcC0kz3ZkIL46DyrzqmltZp30cjXEI6tzXlzoUimVxCJxGCchjtypx7PEQxZvALyzkBXjzyYHz/D86mWUoe5f4U00wChkuBiUENw5DeZNQxTTrCZA+w3IfOCakS2ubicumdkx4Bvgb16u45LeFe8VxDLkqz54cjmM1aRKPVpIstuZndCwbhwRnc8q9a4vdxxR8TMeHJJPUmhkbRMXXCrsQMdanu5nkt17wklPCCeoq1H3BxqwXbxltSjiPJpB+dbEkupRiG3sLFZERRxSSvwgegHWshRu61KCQnbvEOfqK2q/W6awDaaUExXbjOBUzPo2YFdlVtS7Q2khaXRoJoR1iuAG/A0W0/Ufj0JktprZ/3JQP4ikie27UB0Md5PkgcXyhAc7+uOVMekveRkfGmNjnHEmdx6jzpUlo0wewreXCW0LO4ZiPuoMk0uT6zrMh/wBjo3CCfnnmVQPXAq/rMswkAhA35FuVKmr6br0s3Et5IUIG8cuANznbHLGPOrxr9Jkf4NWmajqAITUzAAesZ5fzrNu1RKdofi+AEOS5yNuZpq0zTb2Is1zOZIgcpxfMPc0udrSsckgGM9xj6lqZD5Csn9YQ7Euj2dtxYAWXLkjlvvUmhw/D3c1mit3SzeAE5wOKh3Y5c2oTPzO35Ypstrf/AHkZ6g5qSjuy0+Si/wANK7JTokbwMQGO49azLttFbWPanVllurcXN0/DHHNbMyRhwDxsxBB9qdNL7z4iPunCv0yaA/tptbKE2d29kfjrlO5+JViBwrnY+u+31ovlEyeohxZk1+sunSyWMskciEjiaNg6MAeex86hjZbsoMLkfd4c/UHnUAeW4PjdmVdsmicHHpsyXdlOgkK/fAHPntvR9Ge6KUsctvP3iBTwkNjh/I02aVfLNavcS3EOnhQDHEV4y5J3wBy55pYjm7+RmkZeMnfi9edfYAryytNNgE+EBs0E48lslj9q+ix6eZryBDgqVAQE+E8xj9ail1y3u7eS0bTlaDZYUdgAw9fI0wQ3aXmqXNvwlY7YDgbkS2+T7dKGajYmO6lJsFvLefgE3DGcqvmCNgc70D10WxX1TStNtsqt5H3/ABYaOPLBduWfeg9+vBaAj5ckA+dOmqdmoby4WPSviZ5nIAQRqq5/dDbdMml/tjZXmnRW9ldwvCFy6xsQcE4zy9qJN8tlx7FqYCSFWHlitq7MTm97PafcMcvJboW98b1isPyFTyNat+ze+WXs+sDc7eQx/TmP4/lV5l7TZ6Z++hoMbHoMe1VZeFHABGfIValnXBVTVXhUS8Spn61ltHQcSLUABGHkxivixKUB5rivt7MzthYvByPFX23PDb8HQUTkilHeytdnhiKqu/Sss7Z3iSX8kEYJKsOI9NsYrTtTkVY2OeQrHtVmS6mNwBgySMc46Zp+FW7Mvq5UqQc7NXHdae8vCWMMucLzwedPVhMkyJPEwdT1U52pC7LKs1vc24IDMm5zt6Gp7DWG0a/McmRAV3VVzz6iqyJticebhV9Gq28xyrDAIozfxWXajS/9M1QYPNJV+ZG5Z/pSpp92lxbpJGwKsAQQeYolFOyEMrEHzBoYOtDcsVMy/tB2cuezt9NYXiZ3LQyDwrMp+8p3/DoaApZhQXDggHdc7gV+gL6Cx7T6YdN1VMczFMB4om8x/LrWL6/omodmtWezu1Bc+KKQfJImdmU/p0piOfkxuDBzxorAMwi3y2Rnb1FSXkUMIQwNnIxnu8cXXI57VMs1rJbv3tunfbA+H5qoyyzNI5iKjf5l5L7VFtgVqzZ/hneSW5D5kbBkYKPpmg3ayaKCH4Fb5nckNLCP6VS7RzTWWqx3trfxTQyoAhglB4SB8rAV91btBbJaGPS+7a6mwZH4PMbkE8zQSknaLtEKa2os3774uG4jjURTpIOENywQfPzzSx2okluLhJJicn96TjJ9c+tWrDvJLi2il43DEEArjY9f+VDu0n2F2bcEYjJA2xj0xUxSblTCg97BSKONfI0b7I6+uiaxw3LcNpcgK7Z2RgdmPp50viTBHoajuDxADpk/nWhpSWxsZuLtG7T5miDW0gU+eM0Jnv8AU4ZeCXuuHo2MA0rdhe0bxiOyvHLRfIjsd0P7p9PX6VoQQOPEAc+YrE48HTOrhyxnsXbjVL4nhhhVidsDeren/Egd5fSLv9xRgCijxLGPCijPkKXO0usLp0JSEcc+Nh0X1NT5aQeSaWwV281pILZrKF/t51wQPuIeZPqeVZ8eIxKjEADzPQDapJ3muZ5JrlmeR2LFiedQSDx4PlWzHHiqOTmnzdjD2QYf6kFJ+fI/v86sajplyLwgRcUSnBbnlc7EfTrQjQbkW+pROQGUkLny9afNT76SIS2/dDJKPnmM8iPel5LT0SlKB47KIhumtdP1C0lRQWaNnIK//YjBOcDnzpns5xIOdZxDocjzP8EQzIufGMA5zt70W7PX02l3/wDpV7IHYbxNnp5UptcqvYWCbWpdD8knCwIzt5UQvbWw7SaWdM1YYHOGdfnhb94fy60GikDgHzqeOUqQQcUSY+cE1TFHW+yjaPecFwo7wDMcyjMcnqM/w6UEttEmuGMl7KRnYLnBA6elbFa3dtqFubHU072E/KeqnzB86Wtd0KXSbyOI5kt5s91OBscdD60a2ZfC+XFA/tZoFtDcZ0mF0Dkp3aHI+n+agg7IBbDvb6dkuHbhCooIVf58qbbm9tbNXuruRY7eLbfm3oPPNAb/ALX6TdOe6ldVjH30ILH0qeJXYpY290ddQW6wqGCJ3SgJJgZUD1rKtcuviNRmcyGTLbMeZpg17Xm1NXgi+ygPLHNh6/ypReFlJzvTIwSfIPxtbPC7tXxz4q+8QU8qjIJNGCTWs7W8wkT6joRWh6B2jlNsvBKWVRujblfas24SD6US0q6a1mVxy6il5IKSHYpuDo1eTUJJIchzhlzypN1gGV2B3bGaJWN8JY1BPMbVR1KCUSmVeRpEY0zTOXJC5PZk2XeqCeFiD6ChMnT0otc301mJreNl4ZhhgRnHtQ2QAqCOXXFaYmSdfR9tTiRT5HNaXoCC9sUA8TOpQ5H3hWZQZBB8q0/sOeKHuzwgsBJEfUbEfwpeUdgXJ0wTf6o2iXpa3jBx4Jkfoent1ofpryatqU2o3AUbcCheQrQrye0uLmSCe2t5VRSzccYYggc+VQy6NBcLJNYwpE7YYKDwqx67etVGEb5Vs05PQZFG4sr6Zd8Q4GIyBRQPSPrt9eaRJAEgCtx/acY8unpnzqSDtfGUw6Mp675ofG09CYSbjvsc2n7vxZwBQHtR2llvLWGyRBMkDksCAxzjoOtANS7UtLGUtVPER8xH6UvhprnJiRpHHPh5kU2MfsZDTGztfqk19eNbqV+FgOFHmeppVkhIyY/CfLOxq825GK8OuRTCcKVA/iLLxYGRs1RzLkcQqxImJM436+oqPGKgDiDyK5FqaePhbbkeVeY9jUEcd0eu7DAY3Br6kbA5UjHUelfQpV34fvLke9Ebi2VNKivYcnxKJBjkrDIP0IYVKDaX2W9DnZm7o8vut1o3fSS/CkdeVC+zDxySMABnGcdaZpLcOuCNqTJUy0mIj6YTxT3JOeYX+dDQv2jBVOM1os9ksicPCKAatZR2VpLJgAtsvuaJSAcAJaW6kHj3UnIIFPXZM93bKWXw5IBz5g5/T8KV9Nj4tK+IjB4vFxDGRhWAP5MDRXR9RRIJoC2BHLk8R5nPD/IfWhmmzRgSsISTLLfXF0soZJ+JEYHYjB5jof6UW03WFljhKnEeMADm+P0pKW57uWyAVgzzsXzzbBxv670Pt9VkibjjJ8KbD16D2FWonQh6lY1Uhk/aDrMcyJZt4pAQQOiHzzz9KSRI3sa83LtI7SOcsx3PnXD5t+tMSo5+XK8k7PanPOrmnyrbSnI3x4WqmMZxUxXijBHNedQFPdhoJvXx12qQEE7HNeH61ZoKdwpK5XmKgfBjDDnVuQjG9Uoz9gw6CoAzxMOKPHVd6qrsatg5YgVUOzEetQQ/0sDofKjWnxi67LXyD/yW5Kkeg8a/j4xQ7TbJ72GYRkcajIHnRjshMtvqUkLn7K/tBJgHGWTOR+HGPrUXZc4PjyAekXDWt/BKpyoYcQ9DzrUY4uNRsay6/s2sNQntHGTDIUzn5h0P1G/1rVNEk+I0y2l/eQE/hvS8iIujybUH0pN7Z28zm3gjRmZmOy+1aKsPGcLuaz7tbcSR6vHG3IZB9KGPZcackmG+xPZnvNAvEuWQsZJBwhtlzCcddzlOVJCMJtK1SWMfLMJFbl4S3+K0/wDZ/cCfSLwJ9mRI3NsEnuJD9fpv1rMtPg4ez2pE7DugMHoQRRjYL3yUej5c3Zni0+6Cbxs4lxtl9jn6gZ+hoTET3TeRqzFOEtZISue8QkHrkEY/X6E1Ttj4ip5cqJC5zto6blXZP2depRgb15qxT7JDs5q3bNjOeR51WO4zUkTYqg49h6QBAzLzxUTnYjyrq6rNKKkxwR7GqkG8LZrq6oKfyI0Y94DUcgxK48jXV1QV9BnsnIyakoHI8wRU6/7aXTriHwyQ35VD6d5y/M/jXV1C+zZV+nLPb2FYtZRlzloSDv8AuSOq/kBTX2MYtocOTyLY/wD0a6uqTMcfiGpHKYKnBBrPtZQT9oFEmSME/XNdXUEQ8PzQ8/s4USaRqXEMCOdiAOR/2+P+xrOov/RLz/laOxPmciurqJ9GjF3kFx9pYh/wzX2wiWa8SJiQpfGRzr7XURjl2T6lEsdzMq5wshA/E1S64r5XVZJFmLeM56V9TnXV1UWj/9k="
  },
  {
    fullName: "Harley Keener",
    available: true,
    profession: "Mechanical Engineer",
    fees: 95,
    company: "Stark Industries",
    skills: ["Electronics", "Robotics", "Machine Design", "C++", "3D Modeling", "IoT Systems"],
    description: "Talented young inventor mentored by Tony Stark himself.",
    profilePhoto: "data:image/jpeg;base64,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"
  }

];
var sum = '';
users.forEach(function (elem, idx) {
  sum = sum + `<div class="cart">
           <div id="top">
                ${elem.available ? '<button>available</button>' : '<h1></h1>'}
                <h3>$${elem.fees}/hr</h3>
           </div>
               <img src="${elem.profilePhoto}" alt="">
               <h2 class="name">${elem.fullName}</h2>
               <h3 class="prof">${elem.profession}</h3>
               <h3 class="com">${elem.company}</h3>
              <div class="skills">
                  <h4>${elem.skills[0]}</h4>
                  <h4>${elem.skills[1]}</h4>
                  <h4>${elem.skills[2]}</h4>
                  <h5>+${elem.skills.length - 3}</h5>
              </div>
              <p>${elem.description}</p>
              <button id = "${users[0]}" >View profile</button>
      </div>`

})

var main = document.querySelector('#main')
main.innerHTML = sum

main.addEventListener('click', function (dets) {

  const gold = "dets.target.id";


})