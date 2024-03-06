package pl.pogos.investlog.account

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import pl.pogos.investlog.account.model.Account
import java.util.UUID

@RestController
class AccountController {

    @GetMapping
    fun getAccounts(): List<Account> {
        return listOf(Account(UUID.randomUUID().toString(), "Test account", "My first test account"))
    }

    @PostMapping
    fun save(@RequestBody account: Account) {

    }
}