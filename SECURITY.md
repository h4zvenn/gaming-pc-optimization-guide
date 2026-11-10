# Security Policy

## Supported versions

This project is documentation-first. Security-relevant content and guide optimizations are maintained on the `main` branch.

## Reporting a vulnerability

Do not post exploit details, proof of concept code, or personal diagnostic reports in a public issue.

1. On the repository's **Security** tab, use **Report a vulnerability** if private vulnerability reporting is enabled.
2. If that option is unavailable, open a public issue asking for a private contact channel. Do not include vulnerability details in that issue.
3. In the private report, include:
   - Affected file or section path
   - Description of the security or system risk
   - Safer alternative or proposed fix

GitHub only provides private vulnerability reports when the repository owner has enabled the feature. See GitHub's [private vulnerability reporting guide](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/report-privately).

## In-scope topics

Security reports are critical for:

- Unsafe optimization advice or risky script execution
- Disabling core protections such as Defender, Firewall, UAC, or Windows Update without explicit warnings
- Supply-chain or malware risks in referenced third-party tools
- Commands that can cause data loss, system instability, or security degradation
- Broken or misleading rollback instructions

## Out-of-scope topics

The following are not treated as security vulnerabilities:

- General Windows performance questions
- Feature requests
- Game-specific tuning advice
- Subjective preferences about settings or UI
- Reports without a specific file, section, or unsafe recommendation

## Safe contribution expectations

Contributions must not:

- Recommend disabling Defender, Firewall, UAC, Windows Update, or VBS by default
- Encourage running unknown scripts or executable files
- Include destructive commands without clear warnings and rollback steps
- Promote third-party tools without documenting risks and rollback paths
